import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Animal, HouseActivity, HousingType } from 'src/app/models/preferences.model';
import { AnnouncementModel } from 'src/app/models/announcement.model';
import { LocationProperties } from 'src/app/models/location.model';
export interface Tags {
  name: string;

}
export class AutocompleteSimpleExample {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {

  readonly HouseActivity = HouseActivity;
  readonly HousingType = HousingType;
  readonly Animal = Animal;

  readonly icons: Record<HouseActivity, string> = {
    [HouseActivity.HOUSE_SITTING]: 'cleaning_services',
    [HouseActivity.PET_SITTING]: 'pets',
    [HouseActivity.PLANT_SITTING]: 'local_florist',
  };

  public locationResponse: LocationProperties[] = [];

  selectedChoice: any;
  control!: String;

  public announcement: Partial<AnnouncementModel> = {};


  prefForm: FormGroup = this.fb.group({
    control: ['', Validators.compose([Validators.required])],
  });

  constructor(
    private readonly api: ApiService,
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly _snackbar: SnackbarService
  ) { }

  async onSubmit() {
    try {
      const announcement: AnnouncementModel = await this.api.post('announcement/add', this.announcement);
      this._snackbar.snack('Your announcement has been created');
      this.router.navigate(['/']);
    } catch (e) {
      console.error(e);
      this._snackbar.snack('Something went wrong');
    }

  }


  public formatLabel(value: number): string {
    return `${value}`;
  }


  //On calcule les coordonnées d'un lieux
  public async calculationOfCoordinates(searchInput: string) {
    try {
      const res = await this.api.getLocationFromSearch(searchInput);
      this.locationResponse = res.features.map((feature) => feature.properties);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la recherche de l'emplacement :", error);
    }
  }

}



