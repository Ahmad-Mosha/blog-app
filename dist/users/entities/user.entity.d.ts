import { Blog } from "../../blogs/entity/blogs.entity";
export declare class User {
    id: string;
    username: string;
    blog: Blog[];
    password: string;
}
