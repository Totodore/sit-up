import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateHttpInterceptor } from './interceptors/date.interceptor';
import { HomeComponent } from './components/views/home/home.component';
import { AuthComponent } from './components/views/auth/auth.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: DateHttpInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
