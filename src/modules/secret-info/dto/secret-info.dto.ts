import {IsBoolean, IsString, IsInt} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class SecretInfoDto {
    // @IsInt()
    // _id: number;
    @ApiProperty()
    @IsBoolean()
    isActive: boolean;
    @ApiProperty()
    @IsInt()
    balance: number;
    @ApiProperty()
    @IsString()
    picture: string;
    @ApiProperty()
    @IsInt()
    address: number;
    @ApiProperty()
    @IsString()
    info: string;
    @ApiProperty()
    @IsString()
    text: string;
}