import { Module } from "@nestjs/common";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import { CommentsRepository } from "./comments.repository";
import { PostsRepository } from "../posts/posts.repository";
import { BlogsRepository } from "../blogs/blogs.repository";

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService,
    CommentsRepository,
    PostsRepository,
    BlogsRepository,
  ],
})
export class CommentsModule {}
