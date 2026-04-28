import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsEnum,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Gender } from '../../common/constants';

export class CreateDoctorProfileDto {
  @IsString()
  specialization: string;

  @IsString()
  qualifications: string;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  experience: number;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsNumber()
  @Min(0)
  @Type(() => Number)
  fees: number;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  hospital?: string;
}
