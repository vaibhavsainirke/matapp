import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { AlbumComponent } from './components/album/album.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { LibraryComponent } from './components/library/library.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { LoginDilogComponent } from './components/login-dilog/login-dilog.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    AlbumComponent,
    RatingComponent,
    NavbarComponent,
    LibraryComponent,
    SidenavComponent,
    FromeventComponent,
    LoginDilogComponent,
    SignupDialogComponent,
    AutocompleteComponent,
  ],

  entryComponents: [
    LoginDilogComponent,
    SignupDialogComponent
  ],

  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
