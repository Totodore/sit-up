import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent {
  hide = true;

  email: string = "";
  password: string = "";


  constructor(
    private readonly api: ApiService,
    private readonly router: Router,
    private readonly snackbar: SnackbarService,
  ) { }

  async login() {
    const ok = await this.api.login({
      email: this.email, password: this.password
    });

    if (ok) {
      this.router.navigateByUrl("home");
    } else {
      this.snackbar.snack('Identifiants incorrects. Veuillez réessayer.');
    }
  }

  inscriptionPage() {
    this.router.navigateByUrl("inscription")
  }

  forgotPassword() {
    this.snackbar.snack('Mot de passe oublié');
  }
}


