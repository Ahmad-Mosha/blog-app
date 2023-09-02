import { User } from "../../users/entities/user.entity";
import { Posts } from "./posts.entity";
export declare class Blog {
    id: string;
    title: string;
    content: string;
    user: User;
    posts: Posts[];
}
