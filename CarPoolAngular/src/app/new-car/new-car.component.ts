import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

import { Car }         from '../models/car.model';
import { CarService }  from '../service/car.service';
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  constructor(private carService: CarService,
              private location:Location) { }

  ngOnInit() {
  }
  
  add(license_plate: string,car_type:string,fuel:string, number_of_seats:number): void {
    license_plate = license_plate.trim();
    car_type = car_type.trim();
    fuel = fuel.trim();

    if (!license_plate) { return; }
    this.carService.addCar({ license_plate, car_type,fuel,number_of_seats } as Car)
      .subscribe(data => {alert("Succesfully Added Car details")},Error => {alert("failed while adding car details")});
  }
  goBack(): void {
    this.location.back();
  }

}
