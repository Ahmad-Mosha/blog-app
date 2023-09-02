import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "../../blogs/entity/blogs.entity";
import {JoinTable} from "typeorm/browser";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @OneToMany(() => Blog, (blog) => blog.user)
  blog: Blog[];


  @Column()
  password: string;
}
