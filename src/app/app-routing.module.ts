import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumComponent } from './components/album/album.component';
import { MusicComponent } from './components/music/music.component';
import { ChartsComponent } from './components/charts/charts.component';
import { RatingComponent } from './components/rating/rating.component';
import { LibraryComponent } from './components/library/library.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { SelectboxComponent } from './components/selectbox/selectbox.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PlacedetailsComponent } from './components/selectbox/placedetails/placedetails.component';

const routes: Routes = [
  { path: 'c1', component: C1Component },
  { path: 'c2', component: C2Component },
  { path: 'home', component: HomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'music', component: MusicComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'selectbox', component: SelectboxComponent },
  { path: 'fromevent', component: FromeventComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'placedetails', component: PlacedetailsComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'selectbox/placedetails/:id', component: PlacedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
