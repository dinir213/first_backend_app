import { Injectable } from '@nestjs/common';
import { users } from "../../mocks/mocks_user";

@Injectable()
export class UserService {
    getUsers(){
        return users;
    }
}
