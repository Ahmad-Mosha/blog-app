import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy, ExtractJwt} from "passport-jwt";
import {jwtSecret} from "../constants";
import {AuthCredentialsDto} from "../../users/dto/auth.credentials.dto";
import {UsersService} from "../../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly userService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret
        });
    }
    async validate(payload: AuthCredentialsDto) {
        const user =  await this.userService.findByUsername(payload.username);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        return user;
    }
}