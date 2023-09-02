import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {AuthCredentialsDto} from "../users/dto/auth.credentials.dto";
import {JwtService} from "@nestjs/jwt";
import {User} from "../users/entities/user.entity";
import * as bcyrpt from 'bcrypt';
import {jwtSecret} from "./constants";
import {JwtPayload} from "./jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,private jwtService : JwtService) {
    }
    async validate(payload: AuthCredentialsDto): Promise<User> | null   {
        const user = await this.userService.findByUsername(payload.username);
        const isPasswordValid = bcyrpt.compareSync(payload.password, user.password);
        if (user && isPasswordValid) {
            return user;
        }
        return null;
    }

    async login(
        authCredentialsDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {
        const { username, password } = authCredentialsDto;
        const user = await this.userService.findByUsername(username);

        if (user && (await bcyrpt.compare(password, user.password))) {
            const payload: JwtPayload = { username };
            const accessToken: string =  this.jwtService.sign(payload);
            return { accessToken };
        } else {
            throw new UnauthorizedException('Please check your login credentials');
        }
    }
    async register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userService.create(authCredentialsDto);
    }
    async verify(token: string) : Promise<User> {
        const decoded = this.jwtService.verify(token, {
            secret: jwtSecret
        });
        const user = await this.userService.findByUsername(decoded.username);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}

