import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../users/entities/user.entity";
import { FilterPostsDto } from "./dto/filter-blogs.dto";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    createPost(blogId: string, payload: CreatePostDto, user: User): Promise<string>;
    getPosts(blogId: string): Promise<import("./entity/posts.entity").Post[]>;
    filterPosts(blogId: string, search: FilterPostsDto): Promise<import("./entity/posts.entity").Post[]>;
    updatePost(postId: string, payload: CreatePostDto, user: User): Promise<string>;
}
