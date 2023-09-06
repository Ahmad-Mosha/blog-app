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
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const blogs_repository_1 = require("./blogs.repository");
let BlogsService = exports.BlogsService = class BlogsService {
    constructor(blogsRepository) {
        this.blogsRepository = blogsRepository;
    }
    async create(payload, user) {
        const blog = await this.blogsRepository.createBlog(payload, user);
        return { title: blog.title, content: blog.content };
    }
    async findAll() {
        return await this.blogsRepository.find();
    }
    async filterBlogs(search) {
        return await this.blogsRepository.filterBlogs(search);
    }
    async update(id, payload, user) {
        const blog = await this.blogsRepository.findOne({ where: { id, user } });
        if (!blog) {
            throw new common_1.NotFoundException("Blog not found");
        }
        await this.blogsRepository.update(id, payload);
        return { message: "Blog updated successfully" };
    }
    async delete(id, user) {
        const blog = await this.blogsRepository.findOne({ where: { id, user } });
        if (!blog) {
            throw new common_1.NotFoundException("Blog not found");
        }
        await this.blogsRepository.remove(blog);
        return { message: "Blog deleted successfully" };
    }
};
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [blogs_repository_1.BlogsRepository])
], BlogsService);
//# sourceMappingURL=blogs.service.js.map