import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Posts} from "./posts.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Posts, post => post.comments)
    post: Posts;
}