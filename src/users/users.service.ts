import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {UsersRepository} from "./users.repository";
import {AuthCredentialsDto} from "./dto/auth.credentials.dto";


@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,) {
  }
   
  async create(payload: AuthCredentialsDto) {
    return  await this.usersRepository.createUser(payload)
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(username: string) {
    return `This action returns a #${username} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
