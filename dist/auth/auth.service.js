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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcyrpt = require("bcrypt");
const constants_1 = require("./constants");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validate(payload) {
        const user = await this.userService.findByUsername(payload.username);
        const isPasswordValid = bcyrpt.compareSync(payload.password, user.password);
        if (user && isPasswordValid) {
            return user;
        }
        return null;
    }
    async login(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = await this.userService.findByUsername(username);
        if (user && (await bcyrpt.compare(password, user.password))) {
            const payload = { username };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
    async register(authCredentialsDto) {
        return this.userService.create(authCredentialsDto);
    }
    async verify(token) {
        const decoded = this.jwtService.verify(token, {
            secret: constants_1.jwtSecret
        });
        const user = await this.userService.findByUsername(decoded.username);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map