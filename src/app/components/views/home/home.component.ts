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
  public announcementFilter: Partial<AnnouncementModel> = {
    address: "",
    city: "",
    postalcode: 0,
    description: "",
    numberOfBeds: 0,
    squareMeters: 0,
    startDate: new Date(),
    stopDate: new Date(),
    numberPeopleMax: 0,
    numberOfRooms: 0,
    imagePath: ""
  };
  
  public firstAnnounceToDisplay: number = 0;
  public buttonIncrementDisabled: boolean = false;
  public buttonDecrementDisabled: boolean = true;
  public numberOfAnnoucementsDisplay: number = 5;
  public displayFiltre: boolean = false; 

public test? :AnnouncementModel;

  constructor(
    private readonly _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getAllAnnouncement().then(() => {
      this.displayAnnounces();
    });

  }

  public async filtreAnnounces(){
    try {
      this.announcements = await this._api.getfilterAnnouncements(this.announcementFilter);
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no match announcement");
    }
  }

  submitForm(){
    this.filtreAnnounces();
    console.log(this.announcements);
    this.firstAnnounceToDisplay = 0;
    this.displayAnnounces();
  }

  changeDisplayFiltre(){
    this.displayFiltre = !this.displayFiltre;
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
      this.announcements = await this._api.get("announcement/all");
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no announcement");
    }

  }
}
