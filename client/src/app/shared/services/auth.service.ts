import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private baseUrl = `http://localhost:3000/api/auth`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  private user: Object;

  constructor(private http: Http) {
  }

  isAuthenticated() {
    return this.user !== null && this.user !== undefined;
  }

  ownerSignUp(user): Observable<any> {
    return this.http.post(`${this.baseUrl}/owner`, JSON.stringify(user), this.options)
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
