import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeetupDto } from './dtos/create-meetup.dto';
import { Meetup } from './entities/Meetup.entity';

@Injectable()
export class MeetupsService {
  constructor(
    @InjectRepository(Meetup)
    private meetupRepository: Repository<Meetup>
  ){}
  async create({title, description, date, banner, locale, user_id}: CreateMeetupDto): Promise<Meetup> {
    const meetup = this.meetupRepository.create({
      title, 
      description, 
      date, 
      banner, 
      locale, 
      user_id
    })

    await this.meetupRepository.save(meetup);
    return meetup
  }
}
