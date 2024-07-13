import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdatePlaylistService {
  constructor(private readonly playlistRepository: PlaylistRepository) {}

  async update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }
}
