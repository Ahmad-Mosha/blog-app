import { Injectable, NotFoundException } from "@nestjs/common";
import { BlogsRepository } from "./blogs.repository";
import { CreateBlogDTO } from "./dto/create-blog.dto";
import { User } from "../users/entities/user.entity";
import { FilterBlogsDto } from "./dto/filter-blogs.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";

@Injectable()
export class BlogsService {
  constructor(private blogsRepository: BlogsRepository) {}

  async create(payload: CreateBlogDTO, user: User) {
    const blog = await this.blogsRepository.createBlog(payload, user);
    return { title: blog.title, content: blog.content };
  }

  async findAll() {
    return await this.blogsRepository.find();
  }

  async filterBlogs(search: FilterBlogsDto) {
    return await this.blogsRepository.filterBlogs(search);
  }

  async update(id: string, payload: UpdateBlogDto, user: User) {
    const blog = await this.blogsRepository.findOne({ where: { id, user } });
    if (!blog) {
      throw new NotFoundException("Blog not found");
    }
    await this.blogsRepository.update(id, payload);
    return { message: "Blog updated successfully" };
  }

  async delete(id: string, user: User) {
    const blog = await this.blogsRepository.findOne({ where: { id, user } });
    if (!blog) {
      throw new NotFoundException("Blog not found");
    }
    await this.blogsRepository.remove(blog);
    return { message: "Blog deleted successfully" };
  }
}
