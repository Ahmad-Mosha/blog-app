import {Injectable, NotFoundException} from '@nestjs/common';
import {BlogsRepository} from "./blogs.repository";
import {CreateBlogDTO} from "./dto/create-blog.dto";
import {User} from "../users/entities/user.entity";
import {FilterBlogsDto} from "./dto/filter-blogs.dto";

@Injectable()
export class BlogsService {
    constructor(private  blogsRepository: BlogsRepository) {}

    async create(payload: CreateBlogDTO, user: User) {
        const blog= await this.blogsRepository.createBlog(payload, user);
        return {title: blog.title, content: blog.content};
    }

    async findAll() {
        return await this.blogsRepository.find();
    }

    async filterBlogs(search: FilterBlogsDto) {
        return await this.blogsRepository.filterBlogs(search);
    }
   async delete(id: string, user: User) {
        const blog = await this.blogsRepository.findOne({where: {id, user}})
        if (!blog) {
            throw new NotFoundException('Blog not found');
        }
        await this.blogsRepository.remove(blog);
        return {message: 'Blog deleted successfully'};
   }

}
