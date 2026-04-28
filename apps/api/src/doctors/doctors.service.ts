import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchDoctorsDto, CreateDoctorProfileDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}

  async search(dto: SearchDoctorsDto) {
    const {
      search,
      specialization,
      city,
      minFees,
      maxFees,
      minRating,
      page = 1,
      limit = 12,
      sortBy = 'rating',
      sortOrder = 'desc',
    } = dto;

    const where: Prisma.DoctorWhereInput = {
      isActive: true,
      ...(specialization && {
        specialization: { equals: specialization },
      }),
      ...(city && { city: { contains: city } }),
      ...(minFees !== undefined && { fees: { gte: minFees } }),
      ...(maxFees !== undefined && {
        fees: { ...(minFees !== undefined ? { gte: minFees } : {}), lte: maxFees },
      }),
      ...(minRating !== undefined && { rating: { gte: minRating } }),
      ...(search && {
        OR: [
          { user: { name: { contains: search } } },
          { specialization: { contains: search } },
          { hospital: { contains: search } },
        ],
      }),
    };

    const orderBy: Prisma.DoctorOrderByWithRelationInput = {};
    if (sortBy === 'fees') {
      orderBy.fees = sortOrder;
    } else if (sortBy === 'experience') {
      orderBy.experience = sortOrder;
    } else {
      orderBy.rating = sortOrder;
    }

    const [doctors, total] = await Promise.all([
      this.prisma.doctor.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
            },
          },
        },
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.doctor.count({ where }),
    ]);

    return {
      doctors,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            phone: true,
          },
        },
        availability: {
          where: {
            date: { gte: new Date() },
            isBooked: false,
          },
          orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
          take: 30,
        },
      },
    });

    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    return doctor;
  }

  async getSpecializations() {
    const specializations = await this.prisma.doctor.findMany({
      where: { isActive: true },
      select: { specialization: true },
      distinct: ['specialization'],
      orderBy: { specialization: 'asc' },
    });

    return specializations.map((s) => s.specialization);
  }

  async getCities() {
    const cities = await this.prisma.doctor.findMany({
      where: { isActive: true },
      select: { city: true },
      distinct: ['city'],
      orderBy: { city: 'asc' },
    });

    return cities.map((c) => c.city);
  }

  async createProfile(userId: string, dto: CreateDoctorProfileDto) {
    return this.prisma.doctor.create({
      data: {
        userId,
        specialization: dto.specialization,
        qualifications: dto.qualifications,
        experience: dto.experience,
        bio: dto.bio,
        fees: dto.fees,
        gender: dto.gender,
        city: dto.city,
        state: dto.state,
        hospital: dto.hospital,
      },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  async updateProfile(
    doctorId: string,
    dto: Partial<CreateDoctorProfileDto>,
  ) {
    return this.prisma.doctor.update({
      where: { id: doctorId },
      data: dto,
    });
  }
}
