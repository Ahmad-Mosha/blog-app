import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "../../blogs/entity/blogs.entity";
import {JoinTable} from "typeorm/browser";
import {Post} from "../../posts/entity/posts.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @OneToMany(() => Blog, (blog) => blog.user)
  blog: Blog[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];


  @Column()
  password: string;
}
