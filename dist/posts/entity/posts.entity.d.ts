import { Blog } from "../../blogs/entity/blogs.entity";
import { Comment } from "../../comments/entity/comments.entity";
import { User } from "../../users/entities/user.entity";
export declare class Post {
    id: string;
    content: string;
    user: User;
    blog: Blog;
    comments: Comment[];
}
