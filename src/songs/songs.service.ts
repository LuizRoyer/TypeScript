import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSong } from './dto/create.song.dto';
import { SongsRepository } from './songs.repository';
import { Songs } from './entities/songs.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSong } from './dto/update.song.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class SongsService {
  constructor(private readonly repository: SongsRepository) {}

  async create(create: CreateSong): Promise<Songs> {
    try {
      return this.repository.create(create);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }

  async findAll(): Promise<Songs[]> {
    try {
      return this.repository.findAll();
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }

  async findOne(id: number): Promise<Songs> {
    try {
      return this.repository.findOne(id);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      return this.repository.remove(id);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }

  async update(id: number, request: UpdateSong): Promise<UpdateResult> {
    try {
      return this.repository.update(id, request);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Songs>> {
    try {
      return this.repository.paginate(options);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }
}
