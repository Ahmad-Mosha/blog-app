import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import {BlogsModule} from "../blogs/blogs.module";

@Module({
  imports : [TypeOrmModule.forFeature([UsersRepository]),BlogsModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository]
})
export class UsersModule {}
