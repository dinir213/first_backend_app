import { IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UserLoginDTO {
    @ApiProperty({example: "biden@whitehouse.us", description: "Почта пользователя"})
    @IsString()
    email: string;
    @ApiProperty({example: "qwerty", description: "Пароль пользователя"})
    @IsString()
    password: string;
}
