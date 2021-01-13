import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDto {
  @ApiProperty()
  @IsEmail({}, {
    message: 'Digite uma email válido'
  })
  email: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Senha é obrigatória'
  })
  password: string;
}