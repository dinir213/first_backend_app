import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import {ConfigService} from "@nestjs/config";
import {Injectable} from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Токен вырезаем из header`а в запросе клиента
            ignoreExpiration: false, // Если срок действия токена истек - токен будет считаться недействительным
            secretOrKey: configService.get('secret_jwt') // Глобальный секретный ключ для jwt-токена
        });
    }

    async validate (payload: any) {
        return {...payload.user}
    }
}