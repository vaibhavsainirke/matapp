import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { StateCityService } from 'src/app/services/state-city.service';

@Component({
  selector: 'app-place-dialog',
  templateUrl: './place-dialog.component.html',
  styleUrls: ['./place-dialog.component.css'],
})
export class PlaceDialogComponent {
  id: any;
  placeForCard: any = [];
  imagesForCard: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private stateCity: StateCityService,
    config: NgbRatingConfig
  ) {
    this.id = this.data.place_id;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.getPlace();
    this.getImages();
  }

  getPlace() {
    this.placeForCard = this.stateCity
      .placesToVisit()
      .find((res) => res.place_id == this.id);
  }

  getImages() {
    this.imagesForCard = this.stateCity
      .imagesOfPlaces()
      .filter((res) => res.place_id == this.id);
    console.log(this.imagesForCard);
  }
}
