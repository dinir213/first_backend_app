import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {TokenService} from "./services/token.service";
import {CryptoService} from "./services/crypto.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UserService} from "../user/user.service";

@Module({
  imports: [
      forwardRef(() => UserModule)
  ],
  controllers: [AuthController],
  providers: [
      AuthService,
      CryptoService,
      TokenService,
      JwtService
  ],
    exports: [
        CryptoService,
        TokenService,
        JwtService
    ]
})
export class AuthModule {}
