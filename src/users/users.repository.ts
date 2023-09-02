import { DataSource, Repository } from "typeorm";
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { User } from "./entities/user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import * as bcrypt from "bcrypt";

// how to install bcrypt
// npm install bcrypt

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }



  async findById(id: number) {}

  async createUser(payload: AuthCredentialsDto): Promise<void> {
    const { username, password } = payload;
    const isUnique = await this.findOne( {where: {username}});
    if (isUnique) {
        throw new ConflictException("Username already exists");
    }

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword });

    try {
      await this.save(user);
    } catch (error) {
      console.log(error);
    }
  }
}
