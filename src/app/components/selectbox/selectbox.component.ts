import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateCityService } from 'src/app/services/state-city.service';
import { PlaceDialogComponent } from './place-dialog/place-dialog.component';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css'],
})
export class SelectboxComponent implements OnInit {
  states: any[] = [];
  cities: any[] = [];
  places: any[] = [];
  selectBoxForm!: FormGroup;
  showTable: boolean = false;
  location: any = { state_id: '', city_id: '' };
  displayedColumns: string[] = ['name', 'description', 'wiki_link', 'place_id'];

  constructor(
    private storage: StorageService,
    private stateCity: StateCityService,
    public openPlaceDialog: MatDialog
  ) {
    this.location = {
      state_id: null,
      city_id: null,
    };
  }

  ngOnInit(): void {
    this.selectBoxForm = new FormGroup({
      states: new FormControl('', [Validators.required]),
      cities: new FormControl('', [Validators.required]),
    });
    this.states = this.stateCity.states();
    this.getData();
  }

  getData() {
    this.location = JSON.parse(this.storage.readFromLocalStorage('location'));
    this.cities = this.stateCity
      .cities()
      .filter((res) => res.state_id == this.location.state_id);
  }

  onChangeState(state: any) {
    if (state != null) {
      this.cities = this.stateCity
        .cities()
        .filter((data) => data.state_id == state.target.value);
    } else {
      this.cities = [];
      this.location.city_id = null;
    }
  }

  onChangecity(city: any) {
    if (city != null) {
      this.places = this.stateCity
        .placesToVisit()
        .filter((data) => data.city_id == city.target.value);
    } else {
      this.places = [];
      this.location.place_id = null;
    }
    if (this.places.length > 0) {
      this.showTable = true;
    } else {
      this.showTable = false;
    }
  }

  saveData() {
    this.storage.addToLocalStorage('location', JSON.stringify(this.location));
  }

  placeDialog(id:any) {
    console.log(id);
    this.openPlaceDialog.open(PlaceDialogComponent,{data:{place_id:id}});
  }
}
