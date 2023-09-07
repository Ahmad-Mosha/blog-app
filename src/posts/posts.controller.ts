import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CreatePostDto } from "./dto/create-post.dto";
import { GetUser } from "../decorators /get-user.decorator";
import { User } from "../users/entities/user.entity";
import { FilterPostsDto } from "./dto/filter-blogs.dto";

@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post(":id")
  createPost(
    @Param("id") blogId: string,
    @Body() payload: CreatePostDto,
    @GetUser() user: User
  ) {
    return this.postsService.createPost(blogId, payload, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getPosts(@Param("id") blogId: string) {
    return this.postsService.getPosts(blogId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id/filter")
  filterPosts(@Param("id") blogId: string, @Query() search: FilterPostsDto) {
    return this.postsService.filterPosts(blogId, search);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  updatePost(
    @Param("id") postId: string,
    @Body() payload: CreatePostDto,
    @GetUser() user: User
  ) {
    return this.postsService.updatePost(postId, payload, user);
  }
}
