import { Injectable } from "@nestjs/common";
import { PostsRepository } from "./posts.repository";
import { User } from "../users/entities/user.entity";
import { CreatePostDto } from "./dto/create-post.dto";
import { FilterPostsDto } from "./dto/filter-blogs.dto";

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async createPost(blogId: string, payload: CreatePostDto, user: User) {
    return this.postsRepository.createPost(blogId, payload, user);
  }

  async getPosts(blogId: string) {
    return this.postsRepository.getPosts(blogId);
  }

  async filterPosts(blogId: string, search: FilterPostsDto) {
    return this.postsRepository.filterPosts(blogId, search);
  }

  async updatePost(postId: string, payload: CreatePostDto, user: User) {
    return this.postsRepository.updatePost(postId, payload, user);
  }
}
