import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthCredentialsDto} from "../users/dto/auth.credentials.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/signup')
    async signUp(@Body() payload: AuthCredentialsDto) {
    return await this.authService.signUp(payload)

    }

    @Post('/signin')
    signIn() {
        return this.authService.signIn()
    }

    @Post('/logout')
    logout() {
        return this.authService.logout();
    }

}

