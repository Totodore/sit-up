import { Component } from '@angular/core';
import { UserLoginReq } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(
    private readonly _api: ApiService,
    private readonly _snackbar: SnackbarService
  ) { }

  public async login(req: UserLoginReq) {
    try {
      await this._api.login(req);
    } catch (e) {
      console.error(e);
      this._snackbar.snack("Error while logging in");
    }
  }

}
