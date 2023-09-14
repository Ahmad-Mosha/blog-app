import { Injectable, NotFoundException } from "@nestjs/common";
import { CommentsRepository } from "./comments.repository";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { User } from "../users/entities/user.entity";
import { FilterCommentsDto } from "./dto/filter-comments.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Injectable()
export class CommentsService {
  constructor(private repository: CommentsRepository) {}

  async createComment(postId: string, payload: CreateCommentDto, user: User) {
    return await this.repository.createComment(postId, payload, user);
  }

  async findAll(postId: string) {
    return await this.repository.find({ where: { post: { id: postId } } });
  }

  async filterComments(postId: string, search: FilterCommentsDto) {
    return await this.repository.filterComments(postId, search);
  }

  async deleteComment(commentId: string, user: User) {
    const comment = await this.repository.findOne({
      where: { id: commentId, user },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID "${commentId}" not found`);
    }

    return await this.repository.delete({ id: commentId, user });
  }

  async updateComment(
    commentId: string,
    payload: UpdateCommentDto,
    user: User
  ) {
    const comment = await this.repository.findOne({
      where: { id: commentId, user },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with ID "${commentId}" not found`);
    }

    return await this.repository.update({ id: commentId, user }, payload);
  }
}
