import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { secretinfo } from "../../mocks/mocks_secret_info";
import {SecretInfoDto} from "./dto/secret-info.dto";

@Injectable()
export class SecretInfoService {
    private secretInfo = secretinfo;

    getAll() {
        return this.secretInfo;
    }
    create(dto: SecretInfoDto) {
        console.log(dto);
        this.secretInfo.push({
            _id: this.secretInfo.length,
            isActive: dto.isActive,
            balance: `${dto.balance}`,
            picture: dto.picture,
            address: `${dto.address}`,
            info: dto.info,
            text: parseInt(dto.text)
        })
        return this.secretInfo;
    }
    toggle(id:string) {
        console.log(id);
        const sInfo: object = this.secretInfo.find(sInfo => sInfo._id === +id);
        // sInfo._id = 999;
        if (!(sInfo)) {
            throw new HttpException('Not exist', HttpStatus.NOT_FOUND);
        }
        return sInfo;
    }
    addSecretInfo() {
        return 'Вы добавили новую секретную запись';
    }
    delSecretInfo(id) {
        return `Вы удалили секретную запись №${id}`;
    }
}
