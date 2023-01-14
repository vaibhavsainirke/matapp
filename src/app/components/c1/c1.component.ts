import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component {
  name: string = '';
  dataFound: boolean = false;
  accountCreated: boolean = false;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.getDataFromSessionStroage();
  }

  addDataToSessionStorage() {
    this.storage.addToSessionStorage('name', this.name);
    this.dataFound=true;
  }

  getDataFromSessionStroage() {
    this.name = this.storage.readFromSessionStorage('name');
    if (this.name.length > 0) {
      this.dataFound = true;
    }
  }
}
