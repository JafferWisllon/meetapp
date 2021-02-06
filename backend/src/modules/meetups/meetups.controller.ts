import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
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
  @Get()
  findAll(
    @GetUser() user: User
  ): Promise<Meetup[]> {
    return this.meetupService.find(user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(
    @GetUser() user: User,
    @Param('id') id: string,
  ): Promise<Meetup | void> {
    return this.meetupService.getOne(user, id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @GetUser() user: User,
    @Body() createMeetupDto: CreateMeetupDto): Promise<Meetup> {
    return this.meetupService.create(user, createMeetupDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  delete(
    @GetUser() user: User,
    @Param("id") meetupId: string
    ): Promise<void> {
    return this.meetupService.delete(user, meetupId)
  }
}
