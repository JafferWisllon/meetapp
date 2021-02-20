import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CredentialsDto } from './dtos/credentials.dto';

interface Response {
  token: string;
  user: {
    id: string,
    name: string,
    email: string
  }
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) { }
  async login({ email, password }: CredentialsDto): Promise<Response> {
    const { id, name } = await this.userService.validate(email, password);
    const payload = { sub: id }

    const token = this.jwtService.sign(payload);

    return {
      token,
      user: {
        id,
        name,
        email
      }
    };
  }
}
