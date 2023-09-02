import {Global, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'src/users/users.repository';
import {UsersService} from "../users/users.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtSecret} from "./constants";
import {JwtStrategy} from "./strategies/jwt.strategy";
import { BlogsModule } from '../blogs/blogs.module';

@Global()
@Module({
  imports : [
      TypeOrmModule.forFeature([UsersRepository]),
      UsersModule,
      PassportModule.register({defaultStrategy: 'jwt'}),
      JwtModule.register({
          secret: jwtSecret,
          signOptions: {
            expiresIn: 600
        }
      }),
      BlogsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository, UsersService, JwtStrategy],
})
export class AuthModule {}
