import { Injectable } from "@nestjs/common";
import { PostsRepository } from "./posts.repository";
import { User } from "../users/entities/user.entity";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async createPost(blogId: string, payload: CreatePostDto, user: User) {
    return this.postsRepository.createPost(blogId, payload, user);
  }

  async getPosts(blogId: string) {
    return this.postsRepository.getPosts(blogId);
  }

  async updatePost(postId: string, payload: CreatePostDto, user: User) {
    return this.postsRepository.updatePost(postId, payload, user);
  }
}
