import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPlaylistService {
  constructor(private readonly playlistRepository: PlaylistRepository) {}

 async findAll() {
    return `This action returns all playlist`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} playlist`;
  }
}
