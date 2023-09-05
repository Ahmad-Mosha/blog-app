import { User } from "../../users/entities/user.entity";
import { Post } from "../../posts/entity/posts.entity";
export declare class Blog {
    id: string;
    title: string;
    content: string;
    user: User;
    posts: Post[];
}
