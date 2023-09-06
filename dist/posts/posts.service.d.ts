import { PostsRepository } from "./posts.repository";
import { User } from "../users/entities/user.entity";
import { CreatePostDto } from "./dto/create-post.dto";
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: PostsRepository);
    createPost(blogId: string, payload: CreatePostDto, user: User): Promise<string>;
    getPosts(blogId: string): Promise<import("./entity/posts.entity").Post[]>;
    updatePost(postId: string, payload: CreatePostDto, user: User): Promise<string>;
}