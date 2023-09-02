import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BlogsRepository} from "./blogs.repository";

@Module({
  imports: [TypeOrmModule.forFeature([BlogsRepository])],
  providers: [BlogsService, BlogsRepository],
  controllers: [BlogsController],
  exports: [BlogsRepository]
})
export class BlogsModule {}
