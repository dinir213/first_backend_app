import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../user/dto";
import { UserLoginDTO } from "./dto";
import {ApiOperation, ApiProperty, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthUserResponse} from "./response";
import {JwtAuthGuard} from "./auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 201, type: CreateUserDTO})
    @ApiTags('API')
    @Post('register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.register(dto)
    }

    @ApiOperation({summary: 'Логирование юзера и выдача JWT-токена'})
    @ApiResponse({status: 200, type: AuthUserResponse})
    @ApiTags('API')
    @Post('login')
    login(@Body() dto: UserLoginDTO): Promise<AuthUserResponse> {
        return this.authService.login(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('test')
    test () {
        return true;
    }
}
