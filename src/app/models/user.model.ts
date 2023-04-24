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
