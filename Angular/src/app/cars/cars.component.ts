import { Component, OnInit } from '@angular/core';
import { CarService} from '../car.service'

import { AllCars } from '../cars';
import { Car} from '../car'

import { Observable } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: AllCars[];
  public errorMsg;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }
    
  getCars():void{
    this.carService.getCars()
        .subscribe(cars => this.cars = cars);
  };
  delete(car: Car): void {
    this.cars = this.cars.filter(c => c !== car);
    this.carService.deleteCar(car).subscribe();
  }  

}
