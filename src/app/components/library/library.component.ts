import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {
  id: string = '';
  value: string = '';
  returnid:string='';
  removeId:string='';
  returndata: string = '';

  constructor(private storage : StorageService ) {}

  ngOnInit(): void {}

  addDataToLocalStroge() {
    this.storage.addToLocalStorage(this.id, this.value);
  }

  addDataToSessionStorage() {
    this.storage.addToSessionStorage(this.id, this.value);
  }

  getDataFromLocalStroage() {
    this.returndata = this.storage.readFromLocalStorage(this.returnid);
  }

  getDataFromSessionStroage(){
    this.returndata = this.storage.readFromSessionStorage(this.returnid);
  }

  removeDataFromLocalStroage(){
    this.storage.removeFromLocalStorage(this.removeId);
  }

  removeDataFromSessionStroage(){
    this.storage.removeFromSessionStorage(this.removeId);
  }

  ClearDataFromLocalStroage(){
    this.storage.clearFromLocalStorage();
  }

  ClearDataFromSessionStroage(){
    this.storage.clearFromSessionStorage();
  }

}
