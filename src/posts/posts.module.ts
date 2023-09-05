import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {PostsRepository} from "./posts.repository";
import {BlogsRepository} from "../blogs/blogs.repository";

@Module({
  providers: [PostsService, PostsRepository, BlogsRepository],
  controllers: [PostsController]
})
export class PostsModule {}
