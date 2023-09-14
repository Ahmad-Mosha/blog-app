"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./entity/comments.entity");
const posts_repository_1 = require("../posts/posts.repository");
let CommentsRepository = exports.CommentsRepository = class CommentsRepository extends typeorm_1.Repository {
    constructor(dataSource, postsRepository) {
        super(comments_entity_1.Comment, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.postsRepository = postsRepository;
    }
    async createComment(postId, payload, user) {
        const post = await this.postsRepository.findOne({ where: { id: postId } });
        if (!post) {
            throw new common_1.NotFoundException("Post not found");
        }
        const comment = new comments_entity_1.Comment();
        comment.content = payload.content;
        comment.post = post;
        comment.user = user;
        await this.save(comment);
        return comment.content;
    }
    async filterComments(postId, search) {
        const post = await this.postsRepository.findOne({ where: { id: postId } });
        if (!post) {
            throw new common_1.NotFoundException("Post not found");
        }
        const { content } = search;
        const query = this.createQueryBuilder("comment");
        query.where("comment.postId = :postId", { postId });
        if (content) {
            query.andWhere("LOWER(comment.content) LIKE LOWER(:content)", {
                content: `%${content}%`,
            });
        }
        const comments = await query.getMany();
        comments.forEach((comment) => {
            delete comment.id;
        });
        return comments;
    }
};
exports.CommentsRepository = CommentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        posts_repository_1.PostsRepository])
], CommentsRepository);
//# sourceMappingURL=comments.repository.js.map