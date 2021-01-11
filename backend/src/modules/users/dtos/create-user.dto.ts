import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Nome é obrigatório'
  })
  name: string;

  @ApiProperty()
  @IsEmail({}, {
    message: 'Digite uma email válido'
  })
  email: string;

  @ApiProperty()
  @MinLength(6, {
    message: 'Digite uma senha de no mínimo 6 dígitos'
  })
  password: string;
}