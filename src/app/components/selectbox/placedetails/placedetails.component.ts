import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { StateCityService } from 'src/app/services/state-city.service';

@Component({
  selector: 'app-placedetails',
  templateUrl: './placedetails.component.html',
  styleUrls: ['./placedetails.component.css'],
})
export class PlacedetailsComponent implements OnInit {
  id!: number;
  placeForCard: any = [];
  imagesForCard: any = [];

  constructor(
    private route: ActivatedRoute,
    config: NgbRatingConfig,
    private stateCity: StateCityService
  ) {
    config.readonly = true;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

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
