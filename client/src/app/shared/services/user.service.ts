import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class UserService {
  private baseUrl = `${environment.BASE_URL}/auth`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private user: Object;

  constructor(private http: Http) {
  }

  fillUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/userdata`, this.options)
      .map(res => res.json())
  }

  teamAdd(worker, resId): Observable<any> {
    return this.http.post(`${this.baseUrl}/worker/${resId}`, JSON.stringify(worker) ,this.options)
      .map(res => res.json())
  }

  deleteThis(resId, workId): Observable<any> {
      return this.http.post(`${this.baseUrl}/deleteworker/${resId}/${workId}`, {} ,this.options)
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
