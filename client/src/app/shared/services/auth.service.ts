import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class AuthService {
  private baseUrl = `${environment.BASE_URL}/auth`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  private user: Object;

  constructor(private http: Http) {
  }

  isAuthenticated() {
    return this.http.get(`${this.baseUrl}/loggedin`, this.options)
      .map(res => res.json())
  }

  userSignUp(user): Observable<any> {
    if(user.role == 'Owner'){
      return this.http.post(`${this.baseUrl}/owner`, JSON.stringify(user), this.options)
    }
    if(user.role == 'Customer') {
      return this.http.post(`${this.baseUrl}/signup`, JSON.stringify(user), this.options)
    }
  }

  userLogin(user): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(user), this.options)
      .map(res => res.json())
  }

  userLogout(): Observable<any> {
    return this.http.get(`${this.baseUrl}/logout`, this.options)
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
