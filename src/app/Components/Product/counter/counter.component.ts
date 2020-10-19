import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor() { }

  @Input()
  public upperLimit: number;


  @Input()
  public lowerLimit: number;

  public count = 0;

  public increment(): void {
    if (this.count < this.upperLimit) {
      this.count++;
    }
  }

  public decrement(): void {
    if (this.count > this.lowerLimit) {
      this.count--;
    }
  }

}
