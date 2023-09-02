import { AuthCredentialsDto } from "../../users/dto/auth.credentials.dto";
import { UsersService } from "../../users/users.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(payload: AuthCredentialsDto): Promise<import("../../users/entities/user.entity").User>;
}
export {};
