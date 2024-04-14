import { Injectable} from '@nestjs/common';
import { users } from "../../mocks/mocks_user";
import { CreateUserDTO } from "./dto";
import User from "./models/user.model";
import { InjectModel } from "@nestjs/sequelize";
import {CryptoService} from "../auth/services/crypto.service";

@Injectable()
export class UserService {
    constructor(
        private readonly cryptoService: CryptoService,
        @InjectModel(User) private readonly userRepository: typeof User
    ) {}

    async find_user_by_email(email: string) {
        return this.userRepository.findOne({where: { email: email }})
    }

    async create(dto: CreateUserDTO): Promise<CreateUserDTO> {
        dto.password = await this.cryptoService.hash_password(dto.password);
        await this.userRepository.create({
            firstName: dto.firstName,
            username: dto.username,
            email: dto.email,
            password: dto.password,
        });
        return dto
    }

    getUsers(){
        return users;
    }
}