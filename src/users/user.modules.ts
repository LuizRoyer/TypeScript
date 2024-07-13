import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { CreateUserService } from './use-case/create.user.service';
import { UserRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUserService } from './use-case/get.user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [CreateUserService, GetUserService, UserRepository],
})
export class UserModule {}
