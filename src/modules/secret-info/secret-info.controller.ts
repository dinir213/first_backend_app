import {Body, Controller, Get, HttpCode, Param, Post, Redirect, ValidationPipe, UsePipes, Patch} from '@nestjs/common';
import { SecretInfoService } from "./secret-info.service";
import {SecretInfoDto} from "./dto/secret-info.dto";

@Controller('secret-info')
export class SecretInfoController {
    constructor(private readonly secretInfoService: SecretInfoService) {}

    @Get('get')
    async getAll(){
        return this.secretInfoService.getAll();
    }

    @Post('add')
    @UsePipes(new ValidationPipe())
    async create(@Body() dto: SecretInfoDto) {
        return this.secretInfoService.create(dto);
    }

    @Patch(':id')
    // @HttpCode(201)
    // @Redirect('http://localhost:3000/secret-info/get')
    async toggleComplete(@Param('id') id: string) {
        return this.secretInfoService.toggle(id);
    }
}
