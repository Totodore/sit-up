import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ConnexionComponent } from './components/views/connexion/connexion.component';
import { InscriptionComponent } from './components/views/inscription/inscription.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OfferComponent } from './components/views/offer/offer.component';
import { RequestComponent } from './components/views/request/request.component';

const isLogged = () => {
  if (!localStorage.getItem("jwt")) {
    inject(Router).navigate(["/auth"]);
    return false;
  } else {
    return true;
  }
};

const routes: Routes = [
  { path: "auth", component: ConnexionComponent },
  { path: "", component: HomeComponent, canActivate: [isLogged] },
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "profile", component: ProfileComponent  },
  { path: "message", component: ProfileComponent  },
  { path: 'offer/:id', component: OfferComponent },
  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }