import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public productList;
  constructor() {

    this.productList = 'http://localhost:3000/';

  }

}
