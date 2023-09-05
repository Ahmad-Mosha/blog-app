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
exports.BlogsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const blogs_entity_1 = require("./entity/blogs.entity");
let BlogsRepository = exports.BlogsRepository = class BlogsRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(blogs_entity_1.Blog, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createBlog(blog, user) {
        const newBlog = new blogs_entity_1.Blog();
        newBlog.title = blog.title;
        newBlog.content = blog.content;
        newBlog.user = user;
        return await this.save(newBlog);
    }
    async filterBlogs(filterBlogsDto) {
        const { search } = filterBlogsDto;
        const query = this.createQueryBuilder('blog');
        if (search) {
            query.andWhere('(LOWER(blog.title) LIKE LOWER(:search) OR LOWER(blog.content) LIKE LOWER(:search))', { search: `%${search}%` });
        }
        query.select(['blog.title', 'blog.content']);
        const blogs = await query.getMany();
        return blogs;
    }
};
exports.BlogsRepository = BlogsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BlogsRepository);
//# sourceMappingURL=blogs.repository.js.map