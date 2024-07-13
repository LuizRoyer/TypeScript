import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Songs } from './entities/songs.entity';
import { SongsRepository } from './songs.repository';
import { Artist } from 'src/artists/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Songs, Artist])],
  controllers: [SongsController],
  providers: [SongsService, SongsRepository],
})
export class SongsModule {}
