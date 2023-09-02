import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "../auth.service";
import {AuthCredentialsDto} from "../../users/dto/auth.credentials.dto";
@Injectable()
export class LocalStartegy extends PassportStrategy(Strategy, 'local') {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        });
    }
    async validate(payload: AuthCredentialsDto): Promise<any> {
        const user = await this.authService.validate(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}