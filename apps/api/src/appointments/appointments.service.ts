import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto, UpdateAppointmentStatusDto } from './dto';
import { AppointmentStatus } from '../common/constants';

@Injectable()
export class AppointmentsService {
  private readonly logger = new Logger(AppointmentsService.name);

  constructor(private prisma: PrismaService) {}

  async create(patientId: string, dto: CreateAppointmentDto) {
    // Find the availability slot
    const slot = await this.prisma.availability.findUnique({
      where: { id: dto.availabilityId },
      include: { doctor: true },
    });

    if (!slot) {
      throw new NotFoundException('Time slot not found');
    }

    if (slot.isBooked) {
      throw new ConflictException('This time slot is already booked');
    }

    if (slot.doctorId !== dto.doctorId) {
      throw new BadRequestException('Slot does not belong to the specified doctor');
    }

    // Create appointment and mark slot as booked in a transaction
    const appointment = await this.prisma.$transaction(async (tx) => {
      // Double-check the slot is still available (race condition protection)
      const freshSlot = await tx.availability.findUnique({
        where: { id: dto.availabilityId },
      });

      if (!freshSlot || freshSlot.isBooked) {
        throw new ConflictException('This time slot was just booked by another patient');
      }

      // Mark slot as booked
      await tx.availability.update({
        where: { id: dto.availabilityId },
        data: { isBooked: true },
      });

      // Generate a token number (HT-YYYYMMDD-XXXX)
      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const count = await tx.appointment.count({
        where: {
          date: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
      });
      const tokenNumber = `HT-${dateStr}-${String(count + 1).padStart(4, '0')}`;

      // Create the appointment
      return tx.appointment.create({
        data: {
          patientId,
          doctorId: dto.doctorId,
          availabilityId: dto.availabilityId,
          date: slot.date,
          startTime: slot.startTime,
          endTime: slot.endTime,
          reason: dto.reason,
          status: AppointmentStatus.PENDING,
          tokenNumber,
        },
        include: {
          doctor: {
            include: {
              user: {
                select: { name: true, email: true },
              },
            },
          },
          patient: {
            select: { name: true, email: true },
          },
        },
      });
    });

    this.logger.log(
      `Appointment created: ${appointment.id} - Patient: ${patientId}, Doctor: ${dto.doctorId}`,
    );

    return appointment;
  }

  async findByPatient(
    patientId: string,
    status?: AppointmentStatus,
    page = 1,
    limit = 10,
  ) {
    const where = {
      patientId,
      ...(status && { status }),
    };

    const [appointments, total] = await Promise.all([
      this.prisma.appointment.findMany({
        where,
        include: {
          doctor: {
            include: {
              user: {
                select: { name: true, avatar: true },
              },
            },
          },
        },
        orderBy: { date: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.appointment.count({ where }),
    ]);

    return {
      appointments,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async findByDoctor(
    doctorId: string,
    status?: AppointmentStatus,
    date?: string,
    page = 1,
    limit = 10,
  ) {
    const where = {
      doctorId,
      ...(status && { status }),
      ...(date && { date: new Date(date) }),
    };

    const [appointments, total] = await Promise.all([
      this.prisma.appointment.findMany({
        where,
        include: {
          patient: {
            select: { id: true, name: true, email: true, phone: true, avatar: true },
          },
        },
        orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.appointment.count({ where }),
    ]);

    return {
      appointments,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async updateStatus(
    appointmentId: string,
    dto: UpdateAppointmentStatusDto,
    userId: string,
  ) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: { doctor: true },
    });

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    // Verify the user has permission (doctor owner or the patient)
    if (
      appointment.patientId !== userId &&
      appointment.doctor.userId !== userId
    ) {
      throw new BadRequestException(
        'You do not have permission to update this appointment',
      );
    }

    // If cancelling, free up the slot
    if (dto.status === 'CANCELLED') {
      await this.prisma.availability.update({
        where: { id: appointment.availabilityId },
        data: { isBooked: false },
      });
    }

    const updated = await this.prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        status: dto.status as AppointmentStatus,
        notes: dto.notes,
      },
      include: {
        doctor: {
          include: {
            user: { select: { name: true, email: true } },
          },
        },
        patient: {
          select: { name: true, email: true },
        },
      },
    });

    this.logger.log(
      `Appointment ${appointmentId} status updated to ${dto.status}`,
    );

    return updated;
  }

  async getDashboardStats(doctorId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [todayCount, pendingCount, totalCount, recentAppointments] =
      await Promise.all([
        this.prisma.appointment.count({
          where: {
            doctorId,
            date: { gte: today, lt: tomorrow },
            status: { in: ['CONFIRMED', 'PENDING'] },
          },
        }),
        this.prisma.appointment.count({
          where: { doctorId, status: 'PENDING' },
        }),
        this.prisma.appointment.count({
          where: { doctorId },
        }),
        this.prisma.appointment.findMany({
          where: { doctorId, date: { gte: today } },
          include: {
            patient: {
              select: { name: true, avatar: true },
            },
          },
          orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
          take: 5,
        }),
      ]);

    return {
      todayAppointments: todayCount,
      pendingAppointments: pendingCount,
      totalAppointments: totalCount,
      recentAppointments,
    };
  }
}
