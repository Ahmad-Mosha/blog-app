import { DataSource, Repository } from "typeorm";
import { Blog } from "./entity/blogs.entity";
import { CreateBlogDTO } from "./dto/create-blog.dto";
import { User } from "../users/entities/user.entity";
import { FilterBlogsDto } from "./dto/filter-blogs.dto";
export declare class BlogsRepository extends Repository<Blog> {
    private dataSource;
    constructor(dataSource: DataSource);
    createBlog(blog: CreateBlogDTO, user: User): Promise<Blog>;
    filterBlogs(filterBlogsDto: FilterBlogsDto): Promise<Blog[]>;
}
