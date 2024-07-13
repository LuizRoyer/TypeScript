import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserService } from './use-case/create.user.service';
import { CreateUserDto } from './dto/user.create';
import { GetUserService } from './use-case/get.user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly userService: CreateUserService,
    private readonly getUserService: GetUserService,
  ) {}

  @Post()
  create(@Body() createDto: CreateUserDto) {
    return this.userService.create(createDto);
  }

  @Get()
  findAll() {
    return this.getUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getUserService.findOne(+id);
  }
}
