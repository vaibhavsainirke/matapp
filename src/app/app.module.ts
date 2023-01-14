import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { AlbumComponent } from './components/album/album.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { LibraryComponent } from './components/library/library.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { SelectboxComponent } from './components/selectbox/selectbox.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LoginDilogComponent } from './components/login-dilog/login-dilog.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PlaceDialogComponent } from './components/selectbox/place-dialog/place-dialog.component';
import { PlacedetailsComponent } from './components/selectbox/placedetails/placedetails.component';

@NgModule({
  declarations: [
    C1Component,
    C2Component,
    AppComponent,
    HomeComponent,
    MusicComponent,
    AlbumComponent,
    RatingComponent,
    ChartsComponent,
    NavbarComponent,
    LibraryComponent,
    SidenavComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    FromeventComponent,
    SelectboxComponent,
    LoginDilogComponent,
    PlaceDialogComponent,
    SignupDialogComponent,
    AutocompleteComponent,
    PlacedetailsComponent,
    DoughnutChartComponent,
  ],

  entryComponents: [
    LoginDilogComponent,
    PlaceDialogComponent,
    SignupDialogComponent,
  ],

  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    NgChartsModule,
    MaterialModule,
    AppRoutingModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
