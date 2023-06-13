export enum Animal {
  Cat = "Cat",
  Dog = "Dog",
  Frog = "Frog",
  Rabbit = "Rabbit",
  Turtle = "Turtle",
  Fish = "Fish",
  Snake = "Snake",
  Bird = "Bird",
  Hamster = "Hamster",
};

export enum HouseActivity {
  PET_SITTING = "PET_SITTING",
  PLANT_SITTING = "PLANT_SITTING",
  HOUSE_SITTING = "HOUSE_SITTING"
}
export enum HousingType {
  HOUSE = "HOUSE",
  APARTMENT = "APARTMENT",
}
export class Preferences {
  public activities?: HouseActivity[];
  public housingType?: HousingType;
  public refusedAnimals?: Animal[];
  public allowedChildren = true;
  public allowedPets = false;
  public allowedSmoking = false;
  public wifi = true;
}