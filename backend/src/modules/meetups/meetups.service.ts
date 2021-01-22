import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeetupDto } from './dtos/create-meetup.dto';
import { Meetup } from './entities/Meetup.entity';

import { isBefore } from 'date-fns'

@Injectable()
export class MeetupsService {
  constructor(
    @InjectRepository(Meetup)
    private meetupRepository: Repository<Meetup>
  ){}
  async find(user: any): Promise<Meetup[]> {
    const { userId } = user;
   
    return await this.meetupRepository.find({
      where: {
        user_id: userId
      }
    })
  }

  async create(user: any, {title, description, date, banner, locale}: CreateMeetupDto): Promise<Meetup> {
    const { userId } = user;

    const dateHasPassed = isBefore(new Date(date), new Date());

    if (dateHasPassed) {
      throw new BadRequestException('Não é possivel criar meetups, essa data ja passou!')
    }

    const meetup = this.meetupRepository.create({
      title, 
      description, 
      date, 
      banner, 
      locale, 
      user_id: userId
    })

    await this.meetupRepository.save(meetup);
    return meetup
  }

  async delete(user: any, meetupId: string): Promise<void> {
    const { userId } = user;
   
    const meetup = await this.meetupRepository.findOne({
      where: {
        id: meetupId,
        user_id: userId
      }
    })

    if(!meetup) {
      throw new NotFoundException('Meetup não encontrado')
    }

    const dateHasPassed = isBefore(meetup.date, new Date());
    
    if (dateHasPassed) {
      throw new BadRequestException('Não é possivel deletar esse meetup, essa data ja passou!')
    }

    this.meetupRepository.remove(meetup);
  }
}
