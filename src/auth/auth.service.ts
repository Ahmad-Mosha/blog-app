import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {AuthCredentialsDto} from "../users/dto/auth.credentials.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {
    }
    async signUp(payload: AuthCredentialsDto) {
        return await this.userService.create(payload)
    }

    signIn() {
        return 'signIn';
    }

    logout() {
        return 'logout'
    }
}

