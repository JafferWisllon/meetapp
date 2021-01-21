import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMeetupDto } from './dtos/create-meetup.dto';
import { Meetup } from './entities/Meetup.entity';
import { MeetupsService } from './meetups.service';
import { GetUser } from '../auth/getUser'
import { User } from '../users/entities/User.entity';

@Controller('meetups')
export class MeetupsController {
  constructor(private meetupService: MeetupsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @GetUser() user: User,
    @Body() createMeetupDto: CreateMeetupDto): Promise<Meetup> {
    return this.meetupService.create(user, createMeetupDto)
  }
}
