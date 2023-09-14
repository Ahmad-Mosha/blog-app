import { CommentsService } from "./comments.service";
import { User } from "../users/entities/user.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FilterCommentsDto } from "./dto/filter-comments.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
export declare class CommentsController {
    private service;
    constructor(service: CommentsService);
    createComment(postId: string, payload: CreateCommentDto, user: User): Promise<string>;
    findAll(postId: string): Promise<import("./entity/comments.entity").Comment[]>;
    filterComments(postId: string, search: FilterCommentsDto): Promise<import("./entity/comments.entity").Comment[]>;
    deleteComment(commentId: string, user: User): Promise<import("typeorm").DeleteResult>;
    updateComment(commentId: string, payload: UpdateCommentDto, user: User): Promise<import("typeorm").UpdateResult>;
}
