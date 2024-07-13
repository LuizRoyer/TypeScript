import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.create';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private ormRepository: Repository<User>,
  ) {}

  async create(params: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.password = params.password;

    return await this.ormRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.ormRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.ormRepository.findOne({ where: { id } });
  }
}
