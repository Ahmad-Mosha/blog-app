import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from "./users.repository";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { BlogsRepository } from "../blogs/blogs.repository";
export declare class UsersService {
    private usersRepository;
    private blogsRepository;
    constructor(usersRepository: UsersRepository, blogsRepository: BlogsRepository);
    create(payload: AuthCredentialsDto): Promise<void>;
    findAll(): Promise<User[]>;
    findByUsername(username: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<string>;
}
