import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  @ApiProperty()
  songs: [];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  user: number;
}
