import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class TicketService {
  private baseUrl = `${environment.BASE_URL}/ticket`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private product: Object;

  constructor(private http: Http) {
  }

  createTicket(tableId, restId): Observable<any>{
    return this.http.post(`${this.baseUrl}/create/${tableId}/${restId}`, {}, this.options)
      .map(res => res.json())
  }

  freeOrders(tableId, restId): Observable<any> {
    return this.http.post(`${this.baseUrl}/free/${tableId}/${restId}`, {}, this.options)
      .map(res => res.json())
  }

  updInventory(ticket): Observable<any> {
    return this.http.post(`${this.baseUrl}/update`, JSON.stringify(ticket), this.options)
      .map(res => res.json())
  }

  sendTicket(usermail, ticket){
    return this.http.post(`${this.baseUrl}/mail/${usermail}`, JSON.stringify(ticket), this.options)
      .map(res => res.json())
  }

  getAll(restId){
    return this.http.get(`${this.baseUrl}/all/${restId}`, this.options)
      .map(res => res.json())
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
