import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class RestaurantService {
  private baseUrl = `${environment.BASE_URL}/restaurant`;
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

  getOneRestaurant(id){
    return this.http.get(`${this.baseUrl}/info/${id}`, this.options)
      .map(res => res.json())
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
