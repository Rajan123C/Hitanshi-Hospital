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
import { DoctorsService } from './doctors.service';
import { SearchDoctorsDto, CreateDoctorProfileDto } from './dto';
import { JwtAuthGuard } from '../auth/guards';
import { RolesGuard } from '../common/guards';
import { Roles, CurrentUser } from '../common/decorators';
import { Role } from '../common/constants';

@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @Get()
  async search(@Query() dto: SearchDoctorsDto) {
    return this.doctorsService.search(dto);
  }

  @Get('specializations')
  async getSpecializations() {
    return this.doctorsService.getSpecializations();
  }

  @Get('cities')
  async getCities() {
    return this.doctorsService.getCities();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.doctorsService.findById(id);
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR)
  async createProfile(
    @CurrentUser('id') userId: string,
    @Body() dto: CreateDoctorProfileDto,
  ) {
    return this.doctorsService.createProfile(userId, dto);
  }

  @Patch('profile/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  async updateProfile(
    @Param('id') doctorId: string,
    @Body() dto: Partial<CreateDoctorProfileDto>,
  ) {
    return this.doctorsService.updateProfile(doctorId, dto);
  }
}
