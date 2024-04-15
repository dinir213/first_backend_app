import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CryptoService {
    constructor(
        ) {}

    async hash_password(password: string) {
        return bcrypt.hash(password, 10)
    }



}
