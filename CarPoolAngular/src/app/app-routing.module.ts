import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent} from './cars/cars.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CarDetailComponent }  from './car-detail/car-detail.component';
import { NewCarComponent } from './new-car/new-car.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'cars', component: CarsComponent},
  { path: 'newcar', component: NewCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
