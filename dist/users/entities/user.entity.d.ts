import { Blog } from "../../blogs/entity/blogs.entity";
import { Post } from "../../posts/entity/posts.entity";
import { Comment } from "../../comments/entity/comments.entity";
export declare class User {
    id: string;
    username: string;
    blog: Blog[];
    posts: Post[];
    comments: Comment[];
    password: string;
}
