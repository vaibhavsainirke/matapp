import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(
    private httpService: HttpService,
    public constantService: ConstantService
    ) {}

  getAlbums() {
    let requestData = {
      API_URL: 'albums',
      REQUEST_METHOD: this.constantService.REQUEST_METHOD_GET
    };

    return this.httpService.sendRequest(requestData);
  }
}
