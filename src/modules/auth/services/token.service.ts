import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}

    async generate_JwtToken(user) {
        const payload = { user }
        console.log(this.configService.get('secret_jwt'))
        return this.jwtService.sign(payload, {
            secret: this.configService.get('secret_jwt'), // Ключ шифрования токена
            expiresIn: this.configService.get('expire_jwt') // Срок действия токена
        })
    }
}