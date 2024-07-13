import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSong } from './dto/create.song.dto';
import { DeleteResult } from 'typeorm';
import { UpdateSong } from './dto/update.song.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('songs')
@ApiTags('Songs')
export class SongsController {
  constructor(private readonly service: SongsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/pagination')
  pagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('size', new DefaultValuePipe(2), ParseIntPipe) size: number = 2,
  ) {
    return this.service.paginate({
      page,
      limit: size > 100 ? 100 : size,
    });
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: UpdateSong,
  ) {
    return this.service.update(id, request);
  }

  @Post()
  create(@Body() create: CreateSong) {
    return this.service.create(create);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.service.remove(id);
  }
}
