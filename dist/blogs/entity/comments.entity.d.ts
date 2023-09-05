import { Post } from "../../posts/entity/posts.entity";
export declare class Comment {
    id: number;
    content: string;
    post: Post;
}
