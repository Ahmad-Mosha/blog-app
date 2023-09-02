import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "../users/dto/auth.credentials.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    register(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
