import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../posts/entity/posts.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;
}