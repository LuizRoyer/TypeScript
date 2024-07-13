import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSong {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiProperty()
  readonly artists;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  releasedDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  @ApiProperty()
  duration: Date;
}
