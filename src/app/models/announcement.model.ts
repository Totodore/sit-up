enum AnimalEnum {
    Cat,
    Dog,
    Frog,
    Rabbit,
    Turtle,
    Fish,
    Snake,
    Bird,
    Hamster,
}

enum HouseActivityEnum {
    PET_SITTING,
    PLANT_SITTING,
    HOUSE_SITTING
}

enum HousingTypeEnum {
    HOUSE,
    APARTMENT,
}


export interface AnnouncementModel{
    id : number;
    address : string;
    city : string;
    x: number
    y: number
    postalcode : number;
    description : string;
    numberOfBeds : number;
    squareMeters : number;
    startDate : Date;
    stopDate : Date;
    numberPeopleMax : number;
    numberOfRooms : number;
    activities: HouseActivityEnum;
    housingType: HousingTypeEnum;
    refusedAnimals: AnimalEnum;
    allowedChildren: boolean;
    allowedPets: boolean;
    allowedSmoking: boolean;
    wifi: boolean;
    imagePath: string;
}
