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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const blogs_repository_1 = require("../blogs/blogs.repository");
let UsersService = exports.UsersService = class UsersService {
    constructor(usersRepository, blogsRepository) {
        this.usersRepository = usersRepository;
        this.blogsRepository = blogsRepository;
    }
    async create(payload) {
        return await this.usersRepository.createUser(payload);
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async findByUsername(username) {
        const user = await this.usersRepository.findOne({ where: { username } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.usersRepository.update(id, updateUserDto);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async remove(id) {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        await this.blogsRepository.delete({ user: { id: id } });
        await this.usersRepository.delete(id);
        return 'User deleted successfully';
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        blogs_repository_1.BlogsRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map