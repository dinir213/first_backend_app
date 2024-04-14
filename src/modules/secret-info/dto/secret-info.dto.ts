import {IsBoolean, IsString, IsInt} from "class-validator";

export class SecretInfoDto {
    // @IsInt()
    // _id: number;
    @IsBoolean()
    isActive: boolean;
    @IsInt()
    balance: number;
    @IsString()
    picture: string;
    @IsInt()
    address: number;
    @IsString()
    info: string;
    @IsString()
    text: string;
}