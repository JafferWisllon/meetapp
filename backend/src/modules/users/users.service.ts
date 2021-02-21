import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/User.entity';
import { hash, compare } from 'bcrypt';
import * as Yup from 'yup';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create({ name, email, password }: CreateUserDto): Promise<User> {
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

    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestException('Invalid Credentials');
    }

    return user;
  }

  async update(id: string, request: UpdateUserDto): Promise<User> {
    const schema = Yup.object().shape({
      name: Yup
        .string(),
      email: Yup
        .string()
        .email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      passwordConfirmation: Yup.string()
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    const isValid = await schema.isValid(request, {
      abortEarly: false
    });

    if (!isValid) {
      throw new BadRequestException('Validation failed');
    }

    const user = await this.usersRepository.findOne(id)

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.email !== request.email) {
      const alreadyExistsEmail = await this.usersRepository.findOne({
        where: {
          email: request.email
        }
      })

      if (alreadyExistsEmail) {
        throw new BadRequestException('Email already used by another');
      }
    }

    if (request.password) {
      request.password = await hash(request.password, 8)
    }

    if (request.oldPassword) {
      delete request.oldPassword;
    }

    if (request.passwordConfirmation) {
      delete request.passwordConfirmation;
    }

    try {

      await this.usersRepository.update(id, request)

      return await this.usersRepository.findOne(id);

    } catch (err) {
      throw new BadRequestException('Não foi possivel atualizar o usuário')
    }
  }
}
