import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateSong {
  @IsString()
  @IsOptional()
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiProperty()
  readonly artists;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  releasedDate: Date;

  @IsOptional()
  @IsMilitaryTime()
  @ApiProperty()
  duration: Date;
}
