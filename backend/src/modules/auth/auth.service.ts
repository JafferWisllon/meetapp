import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CredentialsDto } from './dtos/credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ){}
  async login({ email, password }: CredentialsDto): Promise<{token: string}> {
    const user = await this.userService.validate(email, password);
    
    const payload = {sub: user.id}

    const token = this.jwtService.sign(payload);

    return {token};
  }
}
