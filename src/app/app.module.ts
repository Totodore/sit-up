import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DateHttpInterceptor } from './interceptors/date.interceptor';
import { HomeComponent } from './components/views/home/home.component';
import { HeaderComponent } from './components/utils/header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OfferComponent } from './components/views/offer/offer.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConnexionComponent } from './components/views/connexion/connexion.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InscriptionComponent } from './components/views/inscription/inscription.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestComponent } from './components/views/request/request.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTreeModule } from '@angular/material/tree';

import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChatComponent } from './components/profile/chat/chat.component';
import { ConversationComponent } from './components/profile/chat/conversation/conversation.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OfferComponent,

    RequestComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProfileComponent,
    ChatComponent,
    ConversationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSliderModule,

    MatSnackBarModule,
    MatTreeModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: DateHttpInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
