import { BlogsService } from "./blogs.service";
import { User } from "../users/entities/user.entity";
import { CreateBlogDTO } from "./dto/create-blog.dto";
import { FilterBlogsDto } from "./dto/filter-blogs.dto";
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    create(payload: CreateBlogDTO, user: User): Promise<{
        title: string;
        content: string;
    }>;
    filterBlogs(search: FilterBlogsDto): Promise<import("./entity/blogs.entity").Blog[]>;
    delete(id: string, user: User): Promise<{
        message: string;
    }>;
}
