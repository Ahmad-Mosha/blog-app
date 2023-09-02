import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
export declare class UsersRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    findById(id: number): Promise<void>;
    createUser(payload: AuthCredentialsDto): Promise<void>;
}
