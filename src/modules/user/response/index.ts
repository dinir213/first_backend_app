import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class RegisterUserResponse {
    @ApiProperty()
    @IsString()
    firstName: string
    @ApiProperty()
    @IsString()
    username: string
    @ApiProperty()
    @IsString()
    email: string

}