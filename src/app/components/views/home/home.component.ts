import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { LocationResponse } from 'src/app/models/location.model';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public announcements: AnnouncementModel[] = []; // Liste brut
  public filter: Partial<AnnouncementModel> ={}// Liste brut
  public announcementsFiltered: AnnouncementModel[] = [];//Liste filtré
  public displayAnnouncements: AnnouncementModel[] = [];// List à afficher
  
  public firstAnnounceToDisplay: number = 0;
  public buttonIncrementDisabled: boolean = false;
  public buttonDecrementDisabled: boolean = true;
  public numberOfAnnoucementsDisplay: number = 5;
  public displayFiltre: boolean = false; 

public test? :AnnouncementModel;

  constructor(
    private  _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  //On initialise la liste d'annonce
  async ngOnInit(): Promise<void> {
    await this.getAllAnnouncement();
    await this.ResearchAnnounces();
  }

  // On recherche l'annonce correspondant au champs du filtre
  public filtreAnnounces(tmp_announcement: AnnouncementModel){
    if (this.filter.numberOfBeds && tmp_announcement.numberOfBeds !== this.filter.numberOfBeds) {
      return false;
    }
    if(this.filter.city && tmp_announcement.city != this.filter.city){
      return false;
    }
    if(this.filter.postalcode && tmp_announcement.postalcode != this.filter.postalcode){
      return false;
    }
    if(this.filter.squareMeters && tmp_announcement.squareMeters != this.filter.squareMeters){
      return false;
    }    
    if(this.filter.startDate && tmp_announcement.startDate != this.filter.startDate){
      return false;
    }
    if(this.filter.stopDate && tmp_announcement.stopDate != this.filter.stopDate){
      return false;
    }
    if(this.filter.numberPeopleMax && tmp_announcement.numberPeopleMax != this.filter.numberPeopleMax){
      return false;
    }
    if(this.filter.numberOfRooms && tmp_announcement.numberOfRooms != this.filter.numberOfRooms){
      return false;
    }
    return true;
  }

  public async ResearchAnnounces(){
    this.firstAnnounceToDisplay = 0;
    this.announcementsFiltered = [];
    this.announcements.forEach((announcement: AnnouncementModel) => {
      if(this.filtreAnnounces(announcement)){
        this.announcementsFiltered.push(announcement);
      }
    });
    await this.displayAnnounces();
  }

  //On valide le forme
  submitForm(){
    this.ResearchAnnounces();
  }

  //On affiche ou cache le champs de filtre
  changeDisplayFiltre(){
    this.displayFiltre = !this.displayFiltre;
    this.filter = {};
    this.ResearchAnnounces();
  }

  //On isole les annonces à afficher
  displayAnnounces() {
    this.displayAnnouncements = this.announcementsFiltered.slice(this.firstAnnounceToDisplay, this.firstAnnounceToDisplay+5); // Afficher les éléments 2 à 5
  }

  //On increment lors du clique sur le bouton les choix des éléments à afficher
  incrementDisplayAnnounces(){
    this.firstAnnounceToDisplay =   this.firstAnnounceToDisplay + 1;
    this.displayAnnounces();
    this.buttonStateCalculation();
  }

  //On decrement lors du clique sur le bouton les choix des éléments à afficher
  decrementDisplayAnnounces(){
    this.firstAnnounceToDisplay =   this.firstAnnounceToDisplay -1;
    this.displayAnnounces();
    this.buttonStateCalculation();
  }

    //On test si les bouton de selection d'annonce sont activé
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

  //On récupérer toutes les annonces
  public async getAllAnnouncement() {
    try {
      this.announcements = await this._api.get("announcement/all");
      console.log(this.announcements)
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no announcement");
    }
  }
}
