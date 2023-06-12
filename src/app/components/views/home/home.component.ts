import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public announcements: AnnouncementModel[] = [];
  public displayAnnouncements: AnnouncementModel[] = [];
  public firstAnnounceToDisplay: number = 0;
  public buttonIncrementDisabled: boolean = false;
  public buttonDecrementDisabled: boolean = true;
  public numberOfAnnoucementsDisplay: number = 5;
  constructor(
    private readonly _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getAllAnnouncement().then(() => {
      this.displayAnnounces();
    });
  }


  displayAnnounces() {
    this.displayAnnouncements = this.announcements.slice(this.firstAnnounceToDisplay, this.firstAnnounceToDisplay+5); // Afficher les éléments 2 à 5
  }

  incrementDisplayAnnounces(){
    this.firstAnnounceToDisplay =   this.firstAnnounceToDisplay + 1;
    this.displayAnnounces();
    this.buttonStateCalculation();
  }

  decrementDisplayAnnounces(){
    this.firstAnnounceToDisplay =   this.firstAnnounceToDisplay -1;
    this.displayAnnounces();
    this.buttonStateCalculation();
  }

  buttonStateCalculation(){
    if(this.firstAnnounceToDisplay + this.numberOfAnnoucementsDisplay >= this.announcements.length){
      this.buttonIncrementDisabled = true;
    }else{
      this.buttonIncrementDisabled = false;
    }

    if(this.firstAnnounceToDisplay <= 0){
      this.buttonDecrementDisabled = true;
    }else{
      this.buttonDecrementDisabled = false;
    }
  }

  public async getAllAnnouncement() {
    try {
      this.announcements = await this._api.get("announcement/home");
      //console.log(this.announcements);
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no announcement");
    }

    
    this.announcements.push({
      id: 1,
      address: "123 Rue de l'Exemple",
      city: "Ville-Exemple1",
      postalcode: 12345,
      description: "Ceci est un exemple d'annonce.",
      numberOfBeds: 2,
      squareMeters: 80,
      startDate: new Date("2023-06-15"),
      stopDate: new Date("2023-06-30"),
      numberPeopleMax: 4,
      numberOfRooms: 3,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    });
    
    this.announcements.push(
    {
      id: 2,
      address: "789 Boulevard de l'Exemple",
      city: "Autre-Ville2",
      postalcode: 67890,
      description: "Appartement moderne avec vue panoramique.",
      numberOfBeds: 1,
      squareMeters: 50,
      startDate: new Date("2023-07-01"),
      stopDate: new Date("2023-07-31"),
      numberPeopleMax: 2,
      numberOfRooms: 2,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    })
    this.announcements.push(
    {
      id: 2,
      address: "789 Boulevard de l'Exemple",
      city: "Autre-Ville3",
      postalcode: 67890,
      description: "Appartement moderne avec vue panoramique.",
      numberOfBeds: 1,
      squareMeters: 50,
      startDate: new Date("2023-07-01"),
      stopDate: new Date("2023-07-31"),
      numberPeopleMax: 2,
      numberOfRooms: 2,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    })
    this.announcements.push(
    {
      id: 2,
      address: "789 Boulevard de l'Exemple",
      city: "Autre-Ville4",
      postalcode: 67890,
      description: "Appartement moderne avec vue panoramique.",
      numberOfBeds: 1,
      squareMeters: 50,
      startDate: new Date("2023-07-01"),
      stopDate: new Date("2023-07-31"),
      numberPeopleMax: 2,
      numberOfRooms: 2,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    })
    this.announcements.push({
      id: 1,
      address: "123 Rue de l'Exemple",
      city: "Ville-Exemple5",
      postalcode: 12345,
      description: "Ceci est un exemple d'annonce.",
      numberOfBeds: 2,
      squareMeters: 80,
      startDate: new Date("2023-06-15"),
      stopDate: new Date("2023-06-30"),
      numberPeopleMax: 4,
      numberOfRooms: 3,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    });
    
    this.announcements.push(
    {
      id: 2,
      address: "789 Boulevard de l'Exemple",
      city: "Autre-Ville6",
      postalcode: 67890,
      description: "Appartement moderne avec vue panoramique.",
      numberOfBeds: 1,
      squareMeters: 50,
      startDate: new Date("2023-07-01"),
      stopDate: new Date("2023-07-31"),
      numberPeopleMax: 2,
      numberOfRooms: 2,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    })
    this.announcements.push(
    {
      id: 2,
      address: "789 Boulevard de l'Exemple",
      city: "Autre-Ville7",
      postalcode: 67890,
      description: "Appartement moderne avec vue panoramique.",
      numberOfBeds: 1,
      squareMeters: 50,
      startDate: new Date("2023-07-01"),
      stopDate: new Date("2023-07-31"),
      numberPeopleMax: 2,
      numberOfRooms: 2,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    })
    this.announcements.push(
    {
      id: 2,
      address: "789 Boulevard de l'Exemple",
      city: "Autre-Ville8",
      postalcode: 67890,
      description: "Appartement moderne avec vue panoramique.",
      numberOfBeds: 1,
      squareMeters: 50,
      startDate: new Date("2023-07-01"),
      stopDate: new Date("2023-07-31"),
      numberPeopleMax: 2,
      numberOfRooms: 2,
      imagePath:"https://media.istockphoto.com/id/483773209/fr/photo/nouvelle-confortable-cottage.jpg?s=612x612&w=0&k=20&c=NiEdhKDfvinXmYoIjYm-Eu3VEddZOOiZv7EYBaAhWME="
    })
  }
}
