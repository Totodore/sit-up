import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/views/auth/auth.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';


const isLogged = () => !!localStorage.getItem("jwt");
const routes: Routes = [
  {
    path: "auth", component: AuthComponent, canActivate: [() => !isLogged()],
  },
  { path: "", component: HomeComponent, canActivate: [isLogged] },
  { path: "profile", component: ProfileComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
