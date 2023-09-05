import {Injectable} from "@nestjs/common";
import {DataSource, Repository} from "typeorm";
import {Blog} from "./entity/blogs.entity";
import {CreateBlogDTO} from "./dto/create-blog.dto";
import {User} from "../users/entities/user.entity";
import {FilterBlogsDto} from "./dto/filter-blogs.dto";


@Injectable()
export class BlogsRepository extends Repository<Blog> {
    constructor(private dataSource: DataSource) {
        super(Blog, dataSource.createEntityManager());
    }

    async createBlog(blog: CreateBlogDTO, user : User) {
        const newBlog = new Blog();
        newBlog.title = blog.title;
        newBlog.content = blog.content;
        newBlog.user = user;
        return await this.save(newBlog);
    }

    async filterBlogs (filterBlogsDto : FilterBlogsDto){
        const {search} = filterBlogsDto;
        const query = this.createQueryBuilder('blog');
        if (search) {
            query.andWhere('(LOWER(blog.title) LIKE LOWER(:search) OR LOWER(blog.content) LIKE LOWER(:search))', {search: `%${search}%`});
        }
        query.select(['blog.title', 'blog.content']);
        const blogs = await query.getMany();
        return blogs;
    }




}