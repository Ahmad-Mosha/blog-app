import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../users/entities/user.entity";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    createPost(blogId: string, payload: CreatePostDto, user: User): Promise<string>;
}
