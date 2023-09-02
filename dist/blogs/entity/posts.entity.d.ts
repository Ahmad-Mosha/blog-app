import { Blog } from "./blogs.entity";
import { Comment } from "./comments.entity";
export declare class Posts {
    id: number;
    title: string;
    blog: Blog;
    comments: Comment[];
}
