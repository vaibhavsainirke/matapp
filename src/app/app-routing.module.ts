import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AlbumComponent } from './components/album/album.component';
import { MusicComponent } from './components/music/music.component';
import { RatingComponent } from './components/rating/rating.component';
import { LibraryComponent } from './components/library/library.component';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'music', component: MusicComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'fromevent', component: FromeventComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
