import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DateHttpInterceptor } from './interceptors/date.interceptor';
import { HomeComponent } from './components/views/home/home.component';
import { ConnexionComponent } from './components/views/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: DateHttpInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
