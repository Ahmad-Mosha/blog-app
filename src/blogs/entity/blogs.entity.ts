import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { User } from "../../users/entities/user.entity";
import {Posts} from "./posts.entity";

@Entity()
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.blog)
  user: User;

  @OneToMany(() => Posts, post => post.blog)
  posts: Posts[];

}
