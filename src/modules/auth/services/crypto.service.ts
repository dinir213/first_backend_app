import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CryptoService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
        ) {}

    async hash_password(password: string) {
        return bcrypt.hash(password, 10)
    }

    async generate_JwtToken(user) {
        const payload = { user }
        console.log(this.configService.get('secret_jwt'))
        return this.jwtService.sign(payload, {
            secret: this.configService.get('secret_jwt'), // Ключ шифрования токена
            expiresIn: this.configService.get('expire_jwt') // Срок действия токена
        })
    }

}
