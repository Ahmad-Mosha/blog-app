import { AuthService } from "../auth.service";
import { AuthCredentialsDto } from "../../users/dto/auth.credentials.dto";
declare const LocalStartegy_base: new (...args: any[]) => any;
export declare class LocalStartegy extends LocalStartegy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: AuthCredentialsDto): Promise<any>;
}
export {};
