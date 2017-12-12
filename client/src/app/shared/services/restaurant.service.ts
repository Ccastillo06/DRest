import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class RestaurantService {
  private baseUrl = `http://localhost:3000/api/restaurant`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private restaurant: Object;
  private restaurants: Array<Object>;

  constructor(private http: Http) {
  }

  getRestaurants(){
    return this.http.get(`${this.baseUrl}/all`, this.options)
      .map(res => res.json())
  }

  getOneRestaurant(name){
    return this.http.get(`${this.baseUrl}/info/${name}`, this.options)
      .map(res => res.json())
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
