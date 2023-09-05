import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {BlogsService} from "./blogs.service";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {GetUser} from "../decorators /get-user.decorator";
import {User} from "../users/entities/user.entity";
import {CreateBlogDTO} from "./dto/create-blog.dto";
import {FilterBlogsDto} from "./dto/filter-blogs.dto";
import {UpdateBlogDto} from "./dto/update-blog.dto";

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
    async filterBlogs(@Query() search: FilterBlogsDto) {
        return await this.blogsService.filterBlogs(search);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() payload: UpdateBlogDto, @GetUser() user: User) {
        return await this.blogsService.update(id, payload, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string, @GetUser() user: User) {
        return await this.blogsService.delete(id, user);

    }
}
