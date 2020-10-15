import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor() { }

  public count = 0;

  public increment(): void {

    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

}
