import { Animal, HouseActivity, HousingType } from "./preferences.model";
import { User } from "./user.model";

export interface AnnouncementModel {
  id: number;
  address: string;
  city: string;
  x: number
  y: number
  postalcode: number;
  description: string;
  numberOfBeds: number;
  squareMeters: number;
  startDate: Date;
  stopDate: Date;
  numberPeopleMax: number;
  numberOfRooms: number;
  activities: HouseActivity[];
  housingType: HousingType;
  refusedAnimals: Animal[];
  allowedChildren: boolean;
  allowedPets: boolean;
  allowedSmoking: boolean;
  wifi: boolean;
  imagePath: string;
  author: User;
}
export interface AnnouncementSearchModel {
    x: number;
    y: number;
    range: number;

    numberOfBeds?: number;
    squareMeters?: number;
    startDate?: Date;
    stopDate?: Date;
    numberPeople?: number;
    numberOfRooms?: number;
}

