import { Injectable, NotFoundException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Comment } from "./entity/comments.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { User } from "../users/entities/user.entity";
import { PostsRepository } from "../posts/posts.repository";
import { FilterCommentsDto } from "./dto/filter-comments.dto";

@Injectable()
export class CommentsRepository extends Repository<Comment> {
  constructor(
    private dataSource: DataSource,
    private postsRepository: PostsRepository
  ) {
    super(Comment, dataSource.createEntityManager());
  }

  async createComment(postId: string, payload: CreateCommentDto, user: User) {
    const post = await this.postsRepository.findOne({ where: { id: postId } });
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    const comment = new Comment();
    comment.content = payload.content;
    comment.post = post;
    comment.user = user;
    await this.save(comment);
    return comment.content;
  }

  async filterComments(postId: string, search: FilterCommentsDto) {
    const post = await this.postsRepository.findOne({ where: { id: postId } });
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    const { content } = search;
    const query = this.createQueryBuilder("comment");
    query.where("comment.postId = :postId", { postId });
    if (content) {
      query.andWhere("LOWER(comment.content) LIKE LOWER(:content)", {
        content: `%${content}%`,
      });
    }
    const comments = await query.getMany();
    comments.forEach((comment) => {
      delete comment.id;
    });
    return comments;
  }
}
