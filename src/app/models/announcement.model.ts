export interface AnnouncementModel{
    id : number;
    address : string;
    city : string;
    postalcode : number;
    description : string;
    numberOfBeds : number;
    squareMeters : number;
    startDate : Date;
    stopDate : Date;
    numberPeopleMax : number;
    numberOfRooms : number;
    imagePath: string;
    petSitting: boolean;
    plantSitting: boolean;
    houseSitting: boolean;
}
