import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

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
    private readonly router: Router
  ) { }

  async login() {
    const ok = await this.api.login({
      email: this.email, password: this.password
    });

    if (ok) {
      this.router.navigateByUrl("test");
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  }

  inscriptionPage() {
    this.router.navigateByUrl("inscription")
  }

  forgotPassword() {
    alert('Mot de passe oublié');
  }
}


