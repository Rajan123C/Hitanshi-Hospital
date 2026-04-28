import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSlotsDto } from './dto';

@Injectable()
export class AvailabilityService {
  constructor(private prisma: PrismaService) {}

  async getByDoctor(doctorId: string, startDate: string, endDate: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    return this.prisma.availability.findMany({
      where: {
        doctorId,
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
    });
  }

  async createSlots(doctorId: string, dto: CreateSlotsDto) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const date = new Date(dto.date);
    const duration = parseInt(dto.duration, 10);

    // Generate slots with start and end times
    const slotsData = dto.slots.map((startTime) => {
      const [hours, minutes] = startTime.split(':').map(Number);
      const endMinutes = hours * 60 + minutes + duration;
      const endHours = Math.floor(endMinutes / 60);
      const endMins = endMinutes % 60;
      const endTime = `${String(endHours).padStart(2, '0')}:${String(endMins).padStart(2, '0')}`;

      return {
        doctorId,
        date,
        startTime,
        endTime,
        isBooked: false,
      };
    });

    // SQLite does not support skipDuplicates in createMany, so we use Promise.all
    const results = await Promise.allSettled(
      slotsData.map((data) =>
        this.prisma.availability.create({ data })
      )
    );

    const createdCount = results.filter(r => r.status === 'fulfilled').length;

    return {
      created: createdCount,
      total: dto.slots.length,
      message: `${createdCount} of ${dto.slots.length} slots created successfully`,
    };
  }

  async deleteSlot(slotId: string, doctorId: string) {
    const slot = await this.prisma.availability.findFirst({
      where: { id: slotId, doctorId },
    });

    if (!slot) {
      throw new NotFoundException('Slot not found');
    }

    if (slot.isBooked) {
      throw new BadRequestException('Cannot delete a booked slot');
    }

    await this.prisma.availability.delete({ where: { id: slotId } });

    return { message: 'Slot deleted successfully' };
  }
}
