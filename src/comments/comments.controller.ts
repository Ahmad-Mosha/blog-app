import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { User } from "../users/entities/user.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { GetUser } from "../decorators /get-user.decorator";
import { FilterCommentsDto } from "./dto/filter-comments.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Controller("comments")
export class CommentsController {
  constructor(private service: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post(":id")
  async createComment(
    @Param("id") postId: string,
    @Body() payload: CreateCommentDto,
    @GetUser() user: User
  ) {
    return await this.service.createComment(postId, payload, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findAll(@Param("id") postId: string) {
    return await this.service.findAll(postId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id/filter")
  async filterComments(
    @Param("id") postId: string,
    @Query() search: FilterCommentsDto
  ) {
    return await this.service.filterComments(postId, search);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async deleteComment(@Param("id") commentId: string, @GetUser() user: User) {
    return await this.service.deleteComment(commentId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  async updateComment(
    @Param("id") commentId: string,
    @Body() payload: UpdateCommentDto,
    @GetUser() user: User
  ) {
    return await this.service.updateComment(commentId, payload, user);
  }
}
