import { StoreService } from './../../store/store.service';
import { UrlService } from './../../store/url.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductFetchserviceService {

  constructor(private http: HttpClient, private url: UrlService, public store: StoreService) {

  }

  public async getProducts(): Promise<void> {

    try {

      // Remember to use toPromise method otherwise it is troublesome
      // assign this product list to the store
      this.store.product = await this.http.get(this.url.productList).toPromise();


    } catch (error) {
      console.log(error.message);
    }
  }

}
