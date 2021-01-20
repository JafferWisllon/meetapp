import { Module } from '@nestjs/common';
import { MeetupsService } from './meetups.service';
import { MeetupsController } from './meetups.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Meetup } from './entities/Meetup.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Meetup])],
  providers: [MeetupsService],
  controllers: [MeetupsController]
})
export class MeetupsModule {}
