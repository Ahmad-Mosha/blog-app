import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "../../blogs/entity/blogs.entity";
import {Comment} from "../../blogs/entity/comments.entity";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    content: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @ManyToOne(() => Blog, blog => blog.posts)
    blog: Blog;

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];

}