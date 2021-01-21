import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/User.entity';
import { CreateMeetupDto } from './dtos/create-meetup.dto';
import { Meetup } from './entities/Meetup.entity';

import { isBefore, parseISO } from 'date-fns'

@Injectable()
export class MeetupsService {
  constructor(
    @InjectRepository(Meetup)
    private meetupRepository: Repository<Meetup>
  ){}
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
}
