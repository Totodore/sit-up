import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { LocationProperties, LocationResponse } from 'src/app/models/location.model';
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
  public answerCalculationOfCoordinates: LocationProperties[] = [];
  public announcementFilter: Partial<AnnouncementModel> = {
    address: "8 bd du port",
    city: undefined,
    x: 648952,
    y: 6977867,
    postalcode: undefined,
    description: undefined,
    numberOfBeds: undefined,
    squareMeters: undefined,
    startDate: undefined,
    stopDate: undefined,
    numberPeopleMax: undefined,
    numberOfRooms: undefined,
    imagePath: undefined,
    activities: undefined,
    housingType: undefined,
    refusedAnimals: undefined,
    allowedChildren: undefined,
    allowedPets: undefined,
    allowedSmoking: undefined,
    wifi: undefined,
  };

  public searchInput: string = "";

  public firstAnnounceToDisplay: number = 0;
  public buttonIncrementDisabled: boolean = false;
  public buttonDecrementDisabled: boolean = true;
  public numberOfAnnoucementsDisplay: number = 5;
  public displayFiltre: boolean = false;

  public test?: AnnouncementModel;

  constructor(
    private _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  //On initialise la liste d'annonce
  ngOnInit(): void {
    this.getAllAnnouncement().then(() => {
      this.displayAnnounces();
    });
  }

  // On recherche l'annonce correspondant au champs du filtre
  public async filtreAnnounces() {
    try {
      this.announcements = await this._api.post<Partial<AnnouncementModel>, AnnouncementModel[]>(`announcements/filter`, this.announcementFilter);
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error no match announcement");
    }
  }

  //On valide le form
  submitForm() {
    this.filtreAnnounces();
    console.log(this.announcements);
    this.firstAnnounceToDisplay = 0;
    this.displayAnnounces();
  }

  //On affiche ou cache le champs de filtre
  changeDisplayFiltre() {
    this.displayFiltre = !this.displayFiltre;
  }

  //On isole les annonces à afficher
  displayAnnounces() {
    this.displayAnnouncements = this.announcements.slice(this.firstAnnounceToDisplay, this.firstAnnounceToDisplay + 5); // Afficher les éléments 2 à 5
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

}
