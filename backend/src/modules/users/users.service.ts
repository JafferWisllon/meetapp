import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/User.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create({name, email, password}: CreateUserDto): Promise<User> {
    let user = await this.usersRepository.findOne({
      where: { email }
    });

    if (user) {
      throw new BadRequestException('Email já cadastrado');
    }
    
    const passwordHashed = await hash(password, 8);

    user = this.usersRepository.create({
      name,
      email,
      password: passwordHashed
    });

    await this.usersRepository.save(user);

    return user;
  }
}
