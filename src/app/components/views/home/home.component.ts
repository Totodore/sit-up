import { Component, OnInit } from '@angular/core';
import { AnnouncementModel, AnnouncementSearchModel } from 'src/app/models/announcement.model';
import { LocationProperties, LocationResponse } from 'src/app/models/location.model';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public announcements: AnnouncementModel[] = [];//Liste brut
  public filter: Partial<AnnouncementModel> = {}; //filtre
  public annoucementFiltered: AnnouncementModel[] = []; // Liste filtré
  public displayAnnouncements: AnnouncementModel[] = [];//liste à afficher


  public announcementFilter: Partial<AnnouncementSearchModel> = {}; //filtre
  public answerCalculationOfCoordinates: LocationProperties[] = [];
  public searchInput: string = "";

  public firstAnnounceToDisplay: number = 0;
  public buttonIncrementDisabled: boolean = false;
  public buttonDecrementDisabled: boolean = true;
  public numberOfAnnoucementsDisplay: number = 5;
  public displayFiltre: boolean = false;

  constructor(
    private _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  //On initialise la liste d'annonce
  async ngOnInit(): Promise<void> {
    await this.getAllAnnouncement();
    await this.ResearchAnnounces();
    this.displayAnnounces();
  }

  public FilterAnnouces(tmp_annoucement: AnnouncementModel){
    if (this.filter.numberOfBeds && tmp_annoucement.numberOfBeds !== this.filter.numberOfBeds) {
      return false; // L'annonce ne correspond pas au nombre de lits spécifié, la filtrer
    }
    return true; // L'annonce passe tous les critères de filtrage
  }

  // On filtre les annonces
  public async ResearchAnnounces() {
    this.announcements.forEach((announcement: AnnouncementModel) => {
      if(this.FilterAnnouces(announcement)){
        this.annoucementFiltered.push(announcement);
      }
    });
  }

  //On valide le form
  submitForm() {
    this.ResearchAnnounces();
    console.log(this.filter);
    this.firstAnnounceToDisplay = 0;
    this.displayAnnounces();
  }

  //On affiche ou cache le champs de filtre
  changeDisplayFiltre() {
    this.displayFiltre = !this.displayFiltre;
  }

  //On isole les annonces à afficher
  displayAnnounces() {
    this.displayAnnouncements = this.annoucementFiltered.slice(this.firstAnnounceToDisplay, this.firstAnnounceToDisplay + 5); // Afficher les éléments 2 à 5
  }

  //On increment lors du clique sur le bouton les choix des éléments à afficher
  incrementDisplayAnnounces() {
    this.firstAnnounceToDisplay = this.firstAnnounceToDisplay + 1;
    this.displayAnnounces();
    this.buttonStateCalculation();
  }

  //On decrement lors du clique sur le bouton les choix des éléments à afficher
  decrementDisplayAnnounces() {
    this.firstAnnounceToDisplay = this.firstAnnounceToDisplay - 1;
    this.displayAnnounces();
    this.buttonStateCalculation();
  }

  //On test si les bouton de selection d'annonce sont activé
  buttonStateCalculation() {
    if (this.firstAnnounceToDisplay + this.numberOfAnnoucementsDisplay >= this.announcements.length) {
      this.buttonIncrementDisabled = true;
    } else {
      this.buttonIncrementDisabled = false;
    }

    if (this.firstAnnounceToDisplay <= 0) {
      this.buttonDecrementDisabled = true;
    } else {
      this.buttonDecrementDisabled = false;
    }
  }

  //On récupérer toutes les annonces
  public async getAllAnnouncement() {
    try {
      this.announcements = await this._api.get("announcement/all");
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no announcement");
    }
  }

  //On calcule les coordonnées d'un lieux
  public async calculationOfCoordinates(searchInput: string) {
    try {
      const res = await this._api.getLocationFromSearch(searchInput);
      this.answerCalculationOfCoordinates = res.features.map((feature) => feature.properties);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la recherche de l'emplacement :", error);
    }
  }
  
  public formatLabel(value: number): string {
    return `${value}`;
  }


}
