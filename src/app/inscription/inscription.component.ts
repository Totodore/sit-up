import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})

export class InscriptionComponent {
  hide = true;
  name: string = "";
  firstname: string = "";
  email: string = "";
  password: string = "";

  constructor(
    private readonly api: ApiService,
    private readonly router: Router,
    private readonly snackbar: SnackbarService

  ) { }

  async register() {
    if (this.email == "") {
      this.snackbar.snack("Email missing");
      return;
    }
    if (this.name == "") {
      this.snackbar.snack("Name missing");
      return;
    }
    if (this.firstname == "") {
      this.snackbar.snack("Firstname missing");
      return;
    }
    if (this.password == "") {
      this.snackbar.snack("Password missing");
      return;
    }

    const ok = await this.api.register({
      email: this.email, name: this.name, password: this.password, firstname: this.firstname
    });

    if (ok) {
      alert('Information complete.');
      this.router.navigateByUrl("");
    } else {
      alert('Information incomplètes. Veuillez réessayer.');
    }
  }

  connexionPage() {
    this.router.navigateByUrl("connexion")
  }
}
