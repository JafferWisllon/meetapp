import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty({
    message: 'Nome não pode ser vazio'
  })
  name: string;

  @IsOptional()
  @IsEmail({}, {
    message: 'Digite uma email válido'
  })
  email: string;

  @IsOptional()
  @MinLength(6, {
    message: 'Digite uma senha de no mínimo 6 dígitos'
  })
  password: string;
}