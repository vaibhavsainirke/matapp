import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
})
export class C2Component implements OnInit{
  name: string = '';
  dataFound: boolean = false;
  
  constructor(private storage: StorageService) {}
  ngOnInit(): void {
   this.getDataFromSessionStroage();
  }

  getDataFromSessionStroage() {
    this.name= this.storage.readFromSessionStorage('name');
    if (this.name.length > 0) {
      this.dataFound = true;
    }
  }
}
