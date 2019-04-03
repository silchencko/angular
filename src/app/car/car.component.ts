import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements AfterViewInit, OnInit, OnChanges {
  @Input('carItem') car: {name: string, year: number};
  @ContentChild('carAlert') carAlert: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    alert('OnChanges' + changes);
  }
  ngOnInit() {
    alert('onInit');
  }
  constructor() {
    alert('constructor');
  }

  ngAfterViewInit() {
    console.log(this.carAlert);
  }
}
