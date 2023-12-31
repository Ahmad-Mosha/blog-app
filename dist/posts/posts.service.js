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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const posts_repository_1 = require("./posts.repository");
let PostsService = exports.PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async createPost(blogId, payload, user) {
        return this.postsRepository.createPost(blogId, payload, user);
    }
    async getPosts(blogId) {
        return this.postsRepository.getPosts(blogId);
    }
    async filterPosts(blogId, search) {
        return this.postsRepository.filterPosts(blogId, search);
    }
    async updatePost(postId, payload, user) {
        return this.postsRepository.updatePost(postId, payload, user);
    }
    async deletePost(postId, user) {
        const post = await this.postsRepository.findOne({
            where: { id: postId, user },
        });
        if (!post) {
            throw new common_1.NotFoundException("Post not found");
        }
        await this.postsRepository.delete(post);
    }
};
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository])
], PostsService);
//# sourceMappingURL=posts.service.js.map