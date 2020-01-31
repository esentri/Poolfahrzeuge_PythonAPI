import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';


import { CarDetailComponent } from './car-detail/car-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule} from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

import { CarService} from './service/car.service';
import { NewCarComponent } from './new-car/new-car.component'
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NewCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
