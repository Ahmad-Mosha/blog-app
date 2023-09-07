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
exports.PostsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const posts_entity_1 = require("./entity/posts.entity");
const blogs_repository_1 = require("../blogs/blogs.repository");
let PostsRepository = exports.PostsRepository = class PostsRepository extends typeorm_1.Repository {
    constructor(dataSource, blogsRepository) {
        super(posts_entity_1.Post, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.blogsRepository = blogsRepository;
    }
    async createPost(blogId, payload, user) {
        const blog = await this.blogsRepository.findOne({ where: { id: blogId } });
        if (!blog) {
            throw new common_1.NotFoundException("Blog not found");
        }
        const post = new posts_entity_1.Post();
        post.content = payload.content;
        post.blog = blog;
        post.user = user;
        await this.save(post);
        return post.content;
    }
    async getPosts(blogId) {
        const blog = await this.blogsRepository.findOne({ where: { id: blogId } });
        if (!blog) {
            throw new common_1.NotFoundException("Blog not found");
        }
        return this.find({ where: { blog }, select: ["content"] });
    }
    async filterPosts(blogId, search) {
        const blog = await this.blogsRepository.findOne({ where: { id: blogId } });
        if (!blog) {
            throw new common_1.NotFoundException("Blog not found");
        }
        const { content } = search;
        const query = this.createQueryBuilder("post");
        query.where("post.blogId = :blogId", { blogId });
        if (content) {
            query.andWhere("LOWER(post.content) LIKE LOWER(:content)", {
                content: `%${content}%`,
            });
        }
        const posts = await query.getMany();
        posts.forEach((post) => {
            delete post.id;
        });
        return posts;
    }
    async updatePost(postId, payload, user) {
        const post = await this.findOne({ where: { id: postId, user } });
        if (!post) {
            throw new common_1.NotFoundException("Post not found");
        }
        post.content = payload.content;
        await this.save(post);
        return post.content;
    }
};
exports.PostsRepository = PostsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        blogs_repository_1.BlogsRepository])
], PostsRepository);
//# sourceMappingURL=posts.repository.js.map