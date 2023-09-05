import { BlogsRepository } from "./blogs.repository";
import { CreateBlogDTO } from "./dto/create-blog.dto";
import { User } from "../users/entities/user.entity";
import { FilterBlogsDto } from "./dto/filter-blogs.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";
export declare class BlogsService {
    private blogsRepository;
    constructor(blogsRepository: BlogsRepository);
    create(payload: CreateBlogDTO, user: User): Promise<{
        title: string;
        content: string;
    }>;
    findAll(): Promise<import("./entity/blogs.entity").Blog[]>;
    filterBlogs(search: FilterBlogsDto): Promise<import("./entity/blogs.entity").Blog[]>;
    update(id: string, payload: UpdateBlogDto, user: User): Promise<{
        message: string;
    }>;
    delete(id: string, user: User): Promise<{
        message: string;
    }>;
}
