import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  fixedRating = 4;
  ratingArray: number[] = [2, 5, 3, 4];

  constructor() {}
  ngOnInit(){
    const source=from(this.ratingArray)
  }
}
