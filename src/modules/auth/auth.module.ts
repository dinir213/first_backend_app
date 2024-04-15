import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {TokenService} from "./services/token.service";
import {CryptoService} from "./services/crypto.service";
import {JwtService} from "@nestjs/jwt";
import {JwtStrategy} from "./strategy";

@Module({
  imports: [
      forwardRef(() => UserModule)
  ],
  controllers: [AuthController],
  providers: [
      AuthService,
      CryptoService,
      TokenService,
      JwtService,
      JwtStrategy
  ],
    exports: [
        CryptoService,
        TokenService,
        JwtService
    ]
})
export class AuthModule {}
