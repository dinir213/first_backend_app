import {Body, Controller, Get, HttpCode, Param, Post, Redirect} from '@nestjs/common';
import { SecretInfoService } from "./secret-info.service";

@Controller('secret-info')
export class SecretInfoController {
    constructor(private readonly secretInfoService: SecretInfoService) {}

    @Get('get')
    getSecretInfo(){
        return this.secretInfoService.getSecretInfo();
    }

    @Post('add')
    addSecretInfo() {
        return this.secretInfoService.addSecretInfo();
    }
    @Post(':id')
    // @HttpCode(201)
    // @Redirect('http://localhost:3000/secret-info/get')
    delSecretInfo(@Param('id') id: string): string {
        return this.secretInfoService.delSecretInfo(id);
    }
}
