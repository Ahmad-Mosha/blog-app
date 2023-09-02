import {Body, Controller, Post, Req, UseGuards} from "@nestjs/common";
import { Request } from 'express';
import {AuthService} from "./auth.service";
import {AuthCredentialsDto} from "../users/dto/auth.credentials.dto";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
   async login(
        @Body() authCredentialsDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {
        return await this.authService.login(authCredentialsDto);
    }

    @Post('register')
    async register(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return await this.authService.register(authCredentialsDto);
    }
}