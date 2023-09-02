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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsController = void 0;
const common_1 = require("@nestjs/common");
const blogs_service_1 = require("./blogs.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const get_user_decorator_1 = require("../decorators /get-user.decorator");
const user_entity_1 = require("../users/entities/user.entity");
const create_blog_dto_1 = require("./dto/create-blog.dto");
const filter_blogs_dto_1 = require("./dto/filter-blogs.dto");
let BlogsController = exports.BlogsController = class BlogsController {
    constructor(blogsService) {
        this.blogsService = blogsService;
    }
    async create(payload, user) {
        return await this.blogsService.create(payload, user);
    }
    async filterBlogs(search) {
        return await this.blogsService.filterBlogs(search);
    }
    async delete(id, user) {
        return await this.blogsService.delete(id, user);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDTO, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('filter/:search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_blogs_dto_1.FilterBlogsDto]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "filterBlogs", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('delete/:id'),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BlogsController.prototype, "delete", null);
exports.BlogsController = BlogsController = __decorate([
    (0, common_1.Controller)('blogs'),
    __metadata("design:paramtypes", [blogs_service_1.BlogsService])
], BlogsController);
//# sourceMappingURL=blogs.controller.js.map