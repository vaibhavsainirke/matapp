import { Component, EventEmitter, Output } from '@angular/core';
import { NavColorService } from 'src/app/services/nav-color.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  constructor(private colorService: NavColorService) {}
 
  sidecolor:string="";

  changeColor(color: string) {
    this.colorService.setData(color);
  }

  sidenavColor(color:string){
    this.sidecolor=color;
  }
}
