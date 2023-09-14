import { DataSource, Repository } from "typeorm";
import { Comment } from "./entity/comments.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { User } from "../users/entities/user.entity";
import { PostsRepository } from "../posts/posts.repository";
import { FilterCommentsDto } from "./dto/filter-comments.dto";
export declare class CommentsRepository extends Repository<Comment> {
    private dataSource;
    private postsRepository;
    constructor(dataSource: DataSource, postsRepository: PostsRepository);
    createComment(postId: string, payload: CreateCommentDto, user: User): Promise<string>;
    filterComments(postId: string, search: FilterCommentsDto): Promise<Comment[]>;
}
