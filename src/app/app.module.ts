import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MusicComponent } from './components/music/music.component';
import { AlbumComponent } from './components/album/album.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SupportComponent } from './components/support/support.component';
import { LibraryComponent } from './components/library/library.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridlistComponent } from './components/gridlist/gridlist.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    AlbumComponent,
    NavbarComponent,
    LibraryComponent,
    SupportComponent,
    GridlistComponent,
 
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
