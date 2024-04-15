import {BadRequestException, Inject, Injectable} from '@nestjs/common';
import { UserService } from "../user/user.service";
import { CreateUserDTO } from "../user/dto";
import { AppError } from "../../common/constants/errors";
import { UserLoginDTO } from "./dto";
import * as bcrypt from "bcrypt";
import {AuthUserResponse} from "./response";
import {TokenService} from "./services/token.service";
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly tokenService: TokenService
        ) {}

    async register(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const exist_user = await this.userService.find_user_by_email(dto.email)
        if (exist_user) throw new BadRequestException(AppError.USER_EXISTS)
        return this.userService.create(dto)
    }

    async login(dto: UserLoginDTO): Promise<AuthUserResponse> {
        const exist_user = await this.userService.find_user_by_email(dto.email)
        if (!exist_user) throw new BadRequestException(AppError.USER_NOT_EXISTS)

        const validate_password = await bcrypt.compare(dto.password, exist_user.password)
        if (!validate_password) throw new BadRequestException(AppError.WRONG_DATA)

        const token = await this.tokenService.generate_JwtToken(dto.email)

        return {...exist_user, token}
    }
}

