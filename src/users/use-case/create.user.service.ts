import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.create';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createDto: CreateUserDto) {
    try {
      return this.userRepository.create(createDto);
    } catch (e) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      });
    }
  }
}
