import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { LibraryComponent } from './components/library/library.component';
import { MusicComponent } from './components/music/music.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  { path: 'album', component: AlbumComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'music', component: MusicComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
