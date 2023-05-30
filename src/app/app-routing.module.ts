import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ConnexionComponent } from './components/views/connexion/connexion.component';
import { InscriptionComponent } from './components/views/inscription/inscription.component';
import { OfferComponent } from './components/views/offer/offer.component';
import { RequestComponent } from './components/views/request/request.component';
import { AdminComponent } from './components/views/admin/admin.component';

const isLogged = () => {
  if (!localStorage.getItem("jwt")) {
    inject(Router).navigate(["/auth"]);
    return false;
  } else {
    return true;
  }
};


const isLoggedAdmin = () => {
  if (localStorage.getItem("role") !== "admin") {
    inject(Router).navigate(["/"]);
    return false;
  } else {
    return true;
  }
};

const routes: Routes = [
  { path: "auth", component: ConnexionComponent },
  { path: "", component: HomeComponent, canActivate: [isLogged] },
  { path: "connexion", component: ConnexionComponent, canActivate: [isLogged] },
  { path: "inscription", component: InscriptionComponent, canActivate: [isLogged] },
  { path: 'offer', component: OfferComponent, canActivate: [isLogged] },
  { path: 'request', component: RequestComponent, canActivate: [isLogged] },
  { path: 'admin', component: AdminComponent, canActivate: [isLoggedAdmin] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
