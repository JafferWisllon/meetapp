import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMeetupDto } from './dtos/create-meetup.dto';
import { Meetup } from './entities/Meetup.entity';
import { MeetupsService } from './meetups.service';

@Controller('meetups')
export class MeetupsController {
  constructor(private meetupService: MeetupsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createMeetupDto: CreateMeetupDto): Promise<Meetup> {
    return this.meetupService.create(createMeetupDto)
  }
}
