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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_repository_1 = require("./comments.repository");
let CommentsService = exports.CommentsService = class CommentsService {
    constructor(repository) {
        this.repository = repository;
    }
    async createComment(postId, payload, user) {
        return await this.repository.createComment(postId, payload, user);
    }
    async findAll(postId) {
        return await this.repository.find({ where: { post: { id: postId } } });
    }
    async filterComments(postId, search) {
        return await this.repository.filterComments(postId, search);
    }
    async deleteComment(commentId, user) {
        const comment = await this.repository.findOne({
            where: { id: commentId, user },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID "${commentId}" not found`);
        }
        return await this.repository.delete({ id: commentId, user });
    }
    async updateComment(commentId, payload, user) {
        const comment = await this.repository.findOne({
            where: { id: commentId, user },
        });
        if (!comment) {
            throw new common_1.NotFoundException(`Comment with ID "${commentId}" not found`);
        }
        return await this.repository.update({ id: commentId, user }, payload);
    }
};
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_repository_1.CommentsRepository])
], CommentsService);
//# sourceMappingURL=comments.service.js.map