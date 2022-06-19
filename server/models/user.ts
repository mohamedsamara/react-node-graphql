import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "users", underscored: true })
export default class User extends Model<User> {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
