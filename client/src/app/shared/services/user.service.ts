import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class UserService {
  private baseUrl = `http://localhost:3000/api/auth`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private user: Object;

  constructor(private http: Http) {
  }

  fillUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/userdata`, this.options)
      .map(res => res.json())
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
