import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products = [
    { name: 'Prod1', price: 30, maxQuantity: 10, userQuantity: 0, counter: { upperLimit: 10, lowerLimit: 0 }, image: 'image1' },
    { name: 'Prod2', price: 40, maxQuantity: 8, userQuantity: 0, counter: { upperLimit: 10, lowerLimit: 0 }, image: 'image2' },
    { name: 'Prod3', price: 50, maxQuantity: 5, userQuantity: 0, counter: { upperLimit: 10, lowerLimit: 0 }, image: 'image3' },

  ];
}
