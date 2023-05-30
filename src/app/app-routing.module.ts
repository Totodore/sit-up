import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ConnexionComponent } from './components/views/connexion/connexion.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }