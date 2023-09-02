import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {UsersRepository} from "./users.repository";
import {AuthCredentialsDto} from "./dto/auth.credentials.dto";
import {BlogsRepository} from "../blogs/blogs.repository";


@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private blogsRepository: BlogsRepository
    ) {
  }
   
  async create(payload: AuthCredentialsDto) {
    return  await this.usersRepository.createUser(payload)
  }

    async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
    }
 async findByUsername(username: string) : Promise<User> {
    const user =  await this.usersRepository.findOne({where: {username}});
    if (!user) {
        throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto);
    if (!user) {
        throw new NotFoundException('User not found');
    }
    return user;
  }

    async remove(id: string) {
    const user = await this.usersRepository.findOne({where: {id}});
    if (!user) {
        throw new NotFoundException('User not found');
    }
    await this.blogsRepository.delete({user: {id: id}});
    await this.usersRepository.delete(id);

    return 'User deleted successfully'
  }
}
