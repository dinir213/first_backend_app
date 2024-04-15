import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Post,
    Redirect,
    ValidationPipe,
    UsePipes,
    Patch,
    ParseIntPipe
} from '@nestjs/common';
import { SecretInfoService } from "./secret-info.service";
import {SecretInfoDto} from "./dto/secret-info.dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDTO} from "../user/dto";

@Controller('secret-info')
export class SecretInfoController {
    constructor(private readonly secretInfoService: SecretInfoService) {}

    @ApiTags('API')
    @Get('get')
    async getAll(){
        return this.secretInfoService.getAll();
    }

    @ApiTags('API')
    @ApiResponse({status: 201})
    @Post('add')
    @UsePipes(new ValidationPipe())
    async create(@Body() dto: SecretInfoDto) {
        return this.secretInfoService.create(dto);
    }

    @ApiTags('API')
    @ApiResponse({status: 400})
    @Patch(':id')
    // @HttpCode(201)
    // @Redirect('http://localhost:3000/secret-info/get')
    async toggleComplete(@Param('id', ParseIntPipe) id: string) {
        console.log()
        return this.secretInfoService.toggle(id);
    }
}
