import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class MenuService {
  private baseUrl = `${environment.BASE_URL}/restaurant`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private product: Object;

  constructor(private http: Http) {
  }

  deleteThis(resId, prodId){
    return this.http.post(`${this.baseUrl}/editmenu`, {resId: resId, prodId: prodId}, this.options)
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
