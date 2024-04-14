import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { SecretInfoModule } from "../secret-info/secret-info.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import {PORT, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} from './settings/consts';
import configurations from "../../configurations";
import User from "../user/models/user.model";
import {AuthModule} from "../auth/auth.module";
import {JwtModule} from "@nestjs/jwt";

console.log(
    `host: ${DB_HOST}`,
    `port: ${DB_PORT}`,
    `database: ${DB_NAME}`,
    `username: ${DB_USER}`,
    `password: ${DB_PASSWORD}`,
    )
@Module({
  imports: [UserModule,
    SecretInfoModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
  }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: "postgres",
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        synchronize: true,
        autoLoadModels: true,
        models: [User]
      })
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
