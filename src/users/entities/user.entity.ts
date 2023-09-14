import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Blog } from "../../blogs/entity/blogs.entity";
import { Post } from "../../posts/entity/posts.entity";
import { Comment } from "../../comments/entity/comments.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @OneToMany(() => Blog, (blog) => blog.user)
  blog: Blog[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @Column()
  password: string;
}
