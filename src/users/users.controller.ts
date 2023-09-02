import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException} from '@nestjs/common';
import { UsersService } from './users.service';
import {AuthCredentialsDto} from "./dto/auth.credentials.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {GetUser} from "../decorators /get-user.decorator";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':username')
    async findByUsername(@Param('username') username: string) {
      return  await this.usersService.findByUsername(username);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
       return  await this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
    async remove(@Param('id') id: string) {
      return  await this.usersService.remove(id);
    }

}







