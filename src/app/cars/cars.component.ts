import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class CarsComponent {


  // @ts-ignore
  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  // }, {
  //   name: 'Mercedes',
  //   year: 2013
  // }, {
  //   name: 'BMW',
  //   year: 2017
  }];

  constructor() {}
  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
