import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePlaylistService {
  constructor(private readonly playlistRepository: PlaylistRepository) {}

  async create(createDto: CreatePlaylistDto) {
    return 'This action adds a new playlist';
  }
}
