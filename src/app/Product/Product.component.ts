import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.scss']
})
export class ProductComponent {

  constructor() { }

  @Input() // helps in receiving data from parent.
  public product: any;
}
