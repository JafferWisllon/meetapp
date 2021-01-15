import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/User.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() request: UpdateUserDto
  ): Promise<any> {
    return this.usersService.update(id, request);
  }
}
