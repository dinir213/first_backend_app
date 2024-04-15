import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

@Table
export default class User extends Model<User> {
    @ApiProperty({example: "John", description: "Имя пользователя"})
    @PrimaryKey
    @Column
    firstName: string

    @ApiProperty({example: "John228", description: "Ник пользователя"})
    @Column
    username: string

    @ApiProperty({example: "biden@whitehouse.us", description: "Почта пользователя"})
    @Column
    email: string

    @ApiProperty({example: "qwerty", description: "Пароль пользователя"})
    @Column
    password: string

    @ApiProperty({example: "1", description: "Страница"})
    @Column
    list: string
}
