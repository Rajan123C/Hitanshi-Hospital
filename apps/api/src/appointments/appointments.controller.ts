import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto, UpdateAppointmentStatusDto } from './dto';
import { JwtAuthGuard } from '../auth/guards';
import { RolesGuard } from '../common/guards';
import { Roles, CurrentUser } from '../common/decorators';
import { Role, AppointmentStatus } from '../common/constants';

@Controller('appointments')
@UseGuards(JwtAuthGuard)
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT)
  async create(
    @CurrentUser('id') patientId: string,
    @Body() dto: CreateAppointmentDto,
  ) {
    return this.appointmentsService.create(patientId, dto);
  }

  @Get('my')
  async getMyAppointments(
    @CurrentUser('id') userId: string,
    @Query('status') status?: AppointmentStatus,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.appointmentsService.findByPatient(
      userId,
      status,
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 10,
    );
  }

  @Get('doctor/:doctorId')
  @UseGuards(RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  async getDoctorAppointments(
    @Param('doctorId') doctorId: string,
    @Query('status') status?: AppointmentStatus,
    @Query('date') date?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.appointmentsService.findByDoctor(
      doctorId,
      status,
      date,
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 10,
    );
  }

  @Get('dashboard/:doctorId')
  @UseGuards(RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  async getDashboardStats(@Param('doctorId') doctorId: string) {
    return this.appointmentsService.getDashboardStats(doctorId);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateAppointmentStatusDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.appointmentsService.updateStatus(id, dto, userId);
  }
}
