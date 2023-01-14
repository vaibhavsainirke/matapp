import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  fixedRating = 4;
  ratingArray: number[] = [2, 3, 1];
  data2='';
  constructor() {
  }
  getChange(event:any){
  console.log(event.target.value)
  }
}
