import { IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiProperty({example: "John", description: "Имя пользователя"})
    @IsString()
    firstName: string;
    @ApiProperty({example: "John228", description: "Ник пользователя"})
    @IsString()
    username: string;
    @ApiProperty({example: "biden@whitehouse.us", description: "Почта пользователя"})
    @IsString()
    email: string;
    @ApiProperty({example: "qwerty", description: "Пароль пользователя"})
    @IsString()
    password: string;

}
