import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../user.entity';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    try {
      return this.userRepository.findAll();
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return this.userRepository.findOne(id);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }
}
