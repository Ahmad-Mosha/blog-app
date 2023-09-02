import { UsersService } from "../users/users.service";
import { AuthCredentialsDto } from "../users/dto/auth.credentials.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/entities/user.entity";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validate(payload: AuthCredentialsDto): Promise<User> | null;
    login(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    register(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    verify(token: string): Promise<User>;
}
