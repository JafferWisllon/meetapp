import { IsDateString, IsString } from 'class-validator'

export class CreateMeetupDto {
  @IsString({
    message: 'Título é obrigatório!'
  })
  title: string;
  
  @IsString({
    message: 'Descrição é obrigatória!'
  })
  description: string
  
  @IsString({
    message: 'Localização é obrigatória!'
  })
  locale: string;
  
  @IsDateString({
    message: 'Data e hora é obrigatória!'
  })
  date: Date; 
  
  @IsString({
    message: 'Banner é obrigatório!'
  })
  banner: string;
}