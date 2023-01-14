import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matapp';
  sidebarOpen = true;
  color:string='';

  constructor( ){
   
  }

  toggleSidenav(){
    this.sidebarOpen = !this.sidebarOpen
  }
 

}
