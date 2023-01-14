import { Component } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent {

  albums:any;
  albumsFound:boolean=false;

  constructor(private albumService: AlbumService){}
 
  getAlbum(){
    this.albumService.getAlbums()?.subscribe((res)=>{
      this.albums = res;
      this.albumsFound = this.albums && this.albums.length>0;
      
     });
  }
}
