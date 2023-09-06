import { DataSource, Repository } from "typeorm";
import { Post } from "./entity/posts.entity";
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../users/entities/user.entity";
import { BlogsRepository } from "../blogs/blogs.repository";
export declare class PostsRepository extends Repository<Post> {
    private dataSource;
    private blogsRepository;
    constructor(dataSource: DataSource, blogsRepository: BlogsRepository);
    createPost(blogId: string, payload: CreatePostDto, user: User): Promise<string>;
    getPosts(blogId: string): Promise<Post[]>;
    updatePost(postId: string, payload: CreatePostDto, user: User): Promise<string>;
}
