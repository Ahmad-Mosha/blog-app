import { Post } from "../../posts/entity/posts.entity";
import { User } from "../../users/entities/user.entity";
export declare class Comment {
    id: string;
    content: string;
    post: Post;
    user: User;
}
