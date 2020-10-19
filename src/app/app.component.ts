import { ProductFetchserviceService } from './services/Product/product-fetchservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public productService: ProductFetchserviceService) {
    this.productService.getProducts();
  }

}
