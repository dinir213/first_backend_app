import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {SequelizeModule} from "@nestjs/sequelize";
import User from "./models/user.model";
import {CryptoService} from "../auth/services/crypto.service";
import {AuthModule} from "../auth/auth.module";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {TokenService} from "../auth/services/token.service";



@Module({
  imports: [
      SequelizeModule.forFeature([User]),
      forwardRef(() => AuthModule)
  ],
  controllers: [UserController],
  providers: [
      UserService,
      CryptoService,
      TokenService
  ],
  exports: [UserService]
})
export class UserModule {}
