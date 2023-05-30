import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateHttpInterceptor } from './interceptors/date.interceptor';
import { HomeComponent } from './components/views/home/home.component';
import { AuthComponent } from './components/views/auth/auth.component';
import { HeaderComponent } from './components/utils/header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { OfferComponent } from './components/views/offer/offer.component';
import {MatDivider, MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';


import { RequestComponent } from './components/views/request/request.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    OfferComponent,

    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSliderModule,
    NgImageSliderModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: DateHttpInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
