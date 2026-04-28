import { IsString, IsArray, IsDateString, Matches } from 'class-validator';

export class CreateSlotsDto {
  @IsDateString()
  date: string;

  @IsArray()
  @IsString({ each: true })
  @Matches(/^\d{2}:\d{2}$/, {
    each: true,
    message: 'Each slot must be in HH:mm format',
  })
  slots: string[]; // Array of start times in HH:mm format

  @IsString()
  @Matches(/^\d+$/, { message: 'Duration must be a number (in minutes)' })
  duration: string; // Duration in minutes (e.g., "30")
}

export class GetAvailabilityDto {
  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}
