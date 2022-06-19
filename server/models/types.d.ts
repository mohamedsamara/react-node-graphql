export interface SequelizeFields {
  update?: Function;
}

export interface User extends SequelizeFields {
  id: number;
  email: string;
  password: string;
  name: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
