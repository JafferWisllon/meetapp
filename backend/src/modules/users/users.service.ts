import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create({name, email, password}: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create({
      name,
      email,
      password
    });

    await this.usersRepository.save(user);

    return user;
  }
}
