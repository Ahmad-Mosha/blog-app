import { Injectable, NotFoundException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Post } from "./entity/posts.entity";
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../users/entities/user.entity";
import { BlogsRepository } from "../blogs/blogs.repository";

@Injectable()
export class PostsRepository extends Repository<Post> {
  constructor(
    private dataSource: DataSource,
    private blogsRepository: BlogsRepository
  ) {
    super(Post, dataSource.createEntityManager());
  }

  async createPost(blogId: string, payload: CreatePostDto, user: User) {
    const blog = await this.blogsRepository.findOne({ where: { id: blogId } });
    if (!blog) {
      throw new NotFoundException("Blog not found");
    }
    const post = new Post();
    post.content = payload.content;
    post.blog = blog;
    post.user = user;
    await this.save(post);
    return post.content;
  }

  async getPosts(blogId: string) {
    const blog = await this.blogsRepository.findOne({ where: { id: blogId } });
    if (!blog) {
      throw new NotFoundException("Blog not found");
    }
    return this.find({ where: { blog }, select: ["content"] });
  }

  async updatePost(postId: string, payload: CreatePostDto, user: User) {
    const post = await this.findOne({ where: { id: postId, user } });
    if (!post) {
      throw new NotFoundException("Post not found");
    }

    post.content = payload.content;
    await this.save(post);
    return post.content;
  }
}
