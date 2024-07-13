import { Injectable } from '@nestjs/common';

@Injectable()
export class RemovePlaylistService {
  constructor(private readonly playlistRepository: PlaylistRepository) {}

  async remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
