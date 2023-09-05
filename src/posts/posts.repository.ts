import {Injectable, NotFoundException} from "@nestjs/common";
import {DataSource, Repository} from "typeorm";
import {Blog} from "../blogs/entity/blogs.entity";
import {Post} from "./entity/posts.entity";
import {CreatePostDto} from "./dto/create-post.dto";
import {User} from "../users/entities/user.entity";
import {BlogsRepository} from "../blogs/blogs.repository";

@Injectable()
export class PostsRepository extends Repository<Post> {

    constructor(private dataSource: DataSource, private  blogsRepository: BlogsRepository) {
        super(Post, dataSource.createEntityManager());
    }

    async createPost(blogId: string , payload: CreatePostDto, user: User) {
        const blog = await this.blogsRepository.findOne({where: {id: blogId}});
        if(!blog) {
            throw new NotFoundException("Blog not found");
        }
        const post = new Post();
        post.content = payload.content;
        post.blog = blog;
        post.user = user;
        await this.save(post);
        return post.content;
    }
}