import { Module } from '@nestjs/common';
import { PlaylistService } from './use-case/get.playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist])],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
