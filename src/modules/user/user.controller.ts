import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDTO} from "./dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    create(@Body() dto: CreateUserDTO) {
        console.log(dto)
        return this.userService.create(dto)
    }

    @Get('get-all-users')
    getUsers(){
        return this.userService.getUsers();
    }
}
