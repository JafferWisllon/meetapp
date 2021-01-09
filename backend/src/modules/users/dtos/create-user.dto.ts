import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Nome é obrigatório'
  })
  name: string;

  @IsEmail({}, {
    message: 'Digite uma email válido'
  })
  email: string;

  @MinLength(6, {
    message: 'Digite uma senha de no mínimo 6 dígitos'
  })
  password: string;
}