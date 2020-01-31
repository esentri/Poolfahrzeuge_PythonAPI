import { Component, OnInit } from '@angular/core';
import { CarService} from '../service/car.service'

import { AllCars } from '../models/cars.model';
import { Car} from '../models/car.model'

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
