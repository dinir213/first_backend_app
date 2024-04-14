import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export default class User extends Model<User> {
    @PrimaryKey
    @Column
    firstName: string
    @Column
    username: string
    @Column
    email: string
    @Column
    password: string
    @Column
    list: string
}
