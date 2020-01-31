import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
import { catchError, map, tap } from 'rxjs/operators';

import { Car       } from '../models/car.model'
import { AllCars} from '../models/cars.model';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _carsUrl: string = "http://127.0.0.1:5000/car";
  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'angular/json' })
  };
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    /** GET: get list of all cars with few details  */
  getCars(): Observable<AllCars[]>{  
    return this.http.get<AllCars[]>(this._carsUrl, this.httpOptions)
    .pipe(
          tap(_ => this.log('Fetched cars')),
          catchError(this.handleError<AllCars[]>('getCars',[]))
      );
  }

  /** GET: get one car and all details  */
  getCar(car_id: number): Observable<Car> {
    const Url= this._carsUrl+"/"+car_id;
    return this.http.get<Car>(Url, this.httpOptions).pipe(
      tap(_ => this.log('fetched car id=${id}')),
      catchError(this.handleError<Car>('getCar id=${id}'))
    );
  }  
  
  /** ADD: add car from the server */
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this._carsUrl, car).pipe(
      tap((newCar: Car) => this.log(`added car w/ id=${newCar.car_id}`)),
      catchError(this.handleError<Car>('addCar'))
    );
  }
      
  /** DELETE: delete a car from the server */
  deleteCar (car: Car | number): Observable<Car> {
    const car_id = typeof car === 'number' ? car : car.car_id;
    const url = `${this._carsUrl}/${car_id}`;
    return this.http.delete<Car>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted car id=${car_id}`)),
      catchError(this.handleError<Car>('deleteCar'))
    );
  }

  /** Log a CarService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarService: ${message}`);
  }  

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}