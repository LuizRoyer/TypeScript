import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateSong } from './dto/create.song.dto';
import { Songs } from './entities/songs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSong } from './dto/update.song.dto';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Artist } from 'src/artists/artist.entity';

export class SongsRepository {
  constructor(
    @InjectRepository(Songs)
    private ormRepository: Repository<Songs>,
    @InjectRepository(Artist)
    private artistRepository: Repository<Artist>,
  ) {}

  async create(params: CreateSong): Promise<Songs> {
    const song = new Songs();
    song.title = params.title;
    song.duration = params.duration;
    song.releasedDate = params.releasedDate;

    const artist = await this.artistRepository.findByIds(params.artists);
    song.artists = artist;

    return await this.ormRepository.save(song);
  }

  async findAll(): Promise<Songs[]> {
    return await this.ormRepository.find();
  }

  async findOne(id: number): Promise<Songs> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.ormRepository.delete(id);
  }

  async update(id: number, request: UpdateSong): Promise<UpdateResult> {
    return await this.ormRepository.update(id, request);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Songs>> {
    return paginate<Songs>(this.ormRepository, options);
  }
}
