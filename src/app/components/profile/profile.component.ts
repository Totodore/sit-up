import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Animal, HouseActivity, HousingType, Preferences } from 'src/app/models/preferences.model';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public isMessage = false;
  public user?: User;
  public prefs?: Preferences;

  readonly HouseActivity = HouseActivity;
  readonly HousingType = HousingType;
  readonly Animal = Animal;

  constructor(
    private readonly api: ApiService,
    private readonly snackbar: SnackbarService,
    private readonly router: Router,
    route: ActivatedRoute,
  ) { 
    route.url.subscribe(url =>  {
      this.isMessage = url[0].path == "message";
    });
  }

  // S'execute au chargement du component
  public async ngOnInit() {
    this.user = await this.api.get("user/me");
    this.prefs = await this.api.get("user/me/preferences");
    this.prefs ??= new Preferences();
  }

  public async save() {
    try {
      await this.api.put("user/me/preferences", this.prefs);
      this.snackbar.snack("Preferences saved");
    } catch (e) {
      console.error(e);
      this.snackbar.snack("Cannot save preferences");
    }
  }

  public logout() {
    this.api.logout();
    this.router.navigateByUrl("/auth");
  }

}
