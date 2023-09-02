import {Body, Controller, Delete, Get, Post, UseGuards} from '@nestjs/common';
import {BlogsService} from "./blogs.service";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {GetUser} from "../decorators /get-user.decorator";
import {User} from "../users/entities/user.entity";
import {CreateBlogDTO} from "./dto/create-blog.dto";
import {FilterBlogsDto} from "./dto/filter-blogs.dto";

@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() payload: CreateBlogDTO, @GetUser() user: User) {
        return await this.blogsService.create(payload, user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('filter/:search')
    async filterBlogs(@Body() search: FilterBlogsDto) {
        return await this.blogsService.filterBlogs(search);
        // show me the url for this route

        // http://localhost:3000/blogs/filter?search=hello
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async delete(id: string, @GetUser() user: User) {
        return await this.blogsService.delete(id, user);
    }
}
