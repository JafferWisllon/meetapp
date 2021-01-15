import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/User.entity';
import { hash, compare } from 'bcrypt';

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

  async validate(email: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { email }
    })

    if(!user) {
      throw new BadRequestException('Invalid Credentials');
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new BadRequestException('Invalid Credentials');
    }

    return user;
  }

  async update(id: string, request: UpdateUserDto): Promise<any>{
    const user = await this.usersRepository.findOne(id)

    if(!user) {
      throw new NotFoundException('User not found');
    }

    try {
      await this.usersRepository.update(id, request)

      return {
        message: 'Usuário atualizado com sucesso!'
      }
    } catch(err) {
      throw new Error('Não foi possivel atualizar o usuário')
    }
  }
}
