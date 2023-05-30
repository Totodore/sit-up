export interface UserModel {
  id: number;
  name: string;
  firstname: string;
  email: string;
  birthdate: Date;
  administrator: boolean;
}

export interface UserLoginReq {
  email: string;
  password: string;
}

export interface UserLoginRes {
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  firstname: string;
  email: string;
  password: string;
  birthdate: Date;
  admin: boolean;
}

export interface UserRegisterReq {
  name: string;
  firstname: string;
  email: string;
  password: string;
}