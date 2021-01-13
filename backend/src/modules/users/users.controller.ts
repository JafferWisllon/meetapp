import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/User.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({summary: 'Create User'})
  @ApiResponse({ status: 201, description: 'Created'})
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userDto);
  }
}
