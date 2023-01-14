import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavColorService {
  private data= new Subject<any>();

  constructor() { }

  getData():Observable<any> {
    return this.data.asObservable();
  }
  
  setData(value:any){
    this.data.next(value);
  }
}
