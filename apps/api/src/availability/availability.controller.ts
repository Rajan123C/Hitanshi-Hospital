import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { CreateSlotsDto } from './dto';
import { JwtAuthGuard } from '../auth/guards';
import { RolesGuard } from '../common/guards';
import { Roles } from '../common/decorators';
import { Role } from '../common/constants';

@Controller('availability')
export class AvailabilityController {
  constructor(private availabilityService: AvailabilityService) {}

  @Get(':doctorId')
  async getByDoctor(
    @Param('doctorId') doctorId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.availabilityService.getByDoctor(doctorId, startDate, endDate);
  }

  @Post(':doctorId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  async createSlots(
    @Param('doctorId') doctorId: string,
    @Body() dto: CreateSlotsDto,
  ) {
    return this.availabilityService.createSlots(doctorId, dto);
  }

  @Delete(':doctorId/:slotId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  async deleteSlot(
    @Param('doctorId') doctorId: string,
    @Param('slotId') slotId: string,
  ) {
    return this.availabilityService.deleteSlot(slotId, doctorId);
  }
}
