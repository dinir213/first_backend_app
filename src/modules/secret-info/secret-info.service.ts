import { Injectable } from '@nestjs/common';
import { secretinfo } from "../../mocks/mocks_secret_info";

@Injectable()
export class SecretInfoService {
    getSecretInfo(){
        return secretinfo;
    }
    addSecretInfo() {
        return 'Вы добавили новую секретную запись';
    }
    delSecretInfo(id) {
        return `Вы удалили секретную запись №${id}`;
    }
}
