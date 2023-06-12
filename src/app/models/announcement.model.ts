import { UserModel } from "./user.model";

export interface AnnouncementModel{
  id: number;
  address : string;
  city : string;
  postalCode : number;
  description : string;
  numberOfBeds : number;
  squareMeters : number;
  startDate : Date;
  stopDate : Date;
  numberPeopleMax : number;
  numberOfRooms: number;
  author: UserModel;
}
export interface AnnouncementModelReq{

  address : string;
  city : string;
  postalCode : number;
  description : string;
  numberOfBeds : number;
  squareMeters : number;
  startDate : Date;
  stopDate : Date;
  numberPeopleMax : number;
  numberOfRooms: number;
  author: UserModel;
}

