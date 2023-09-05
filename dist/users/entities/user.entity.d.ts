import { Blog } from "../../blogs/entity/blogs.entity";
import { Post } from "../../posts/entity/posts.entity";
export declare class User {
    id: string;
    username: string;
    blog: Blog[];
    posts: Post[];
    password: string;
}
