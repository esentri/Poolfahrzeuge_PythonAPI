import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Car }         from '../models/car.model';
import { CarService }  from '../service/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: [ './car-detail.component.scss' ]
})
export class CarDetailComponent implements OnInit {
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }

  goBack(): void {
    this.location.back();
  }

}