"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_controller_1 = require("./comments.controller");
const comments_service_1 = require("./comments.service");
const comments_repository_1 = require("./comments.repository");
const posts_repository_1 = require("../posts/posts.repository");
const blogs_repository_1 = require("../blogs/blogs.repository");
let CommentsModule = exports.CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [comments_controller_1.CommentsController],
        providers: [
            comments_service_1.CommentsService,
            comments_repository_1.CommentsRepository,
            posts_repository_1.PostsRepository,
            blogs_repository_1.BlogsRepository,
        ],
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map