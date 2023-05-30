import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/views/auth/auth.component';
import { HomeComponent } from './components/views/home/home.component';
import { HeaderComponent } from './components/utils/header/header.component';
import { OfferComponent } from './components/views/offer/offer.component';
//import { OfferInsideComponent } from './components/views/offer-inside/offer-inside.component';
import { RequestComponent } from './components/views/request/request.component';
const isLogged = () => !!localStorage.getItem("jwt");

const routes: Routes = [
  {
    path: "auth", component: AuthComponent, canActivate: [() => !isLogged()],
  },
  { path: "", component: HomeComponent, canActivate: [isLogged] },
  { path: 'offer', component: OfferComponent },
 // { path: 'inside', component: OfferInsideComponent },
  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
