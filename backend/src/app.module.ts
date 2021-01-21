import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './modules/auth/auth.module';
import { MeetupsModule } from './modules/meetups/meetups.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    AuthModule,
    MeetupsModule,
    FilesModule
  ]
})
export class AppModule {}
