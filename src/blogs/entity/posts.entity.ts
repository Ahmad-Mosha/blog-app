import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "./blogs.entity";
import {Comment} from "./comments.entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Blog, blog => blog.posts)
    blog: Blog;

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];
}