import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class TableService {
  private baseUrl = `${environment.BASE_URL}/table`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private product: Object;

  constructor(private http: Http) {
  }

  newTable(table, resId){
    return this.http.post(`${this.baseUrl}/new/${resId}`, JSON.stringify(table) , this.options)
      .map(res => res.json())
  }

  tableDelete(tableId, resId){
    return this.http.post(`${this.baseUrl}/delete/${resId}/${tableId}`, {} , this.options)
      .map(res => res.json())
  }

  getTable(id){
    return this.http.get(`${this.baseUrl}/one/${id}`, this.options)
      .map(res => res.json())
  }

  plusThis(tableId, prodId):Observable<any>{
    return this.http.post(`${this.baseUrl}/add/${prodId}/${tableId}`, {}, this.options)
      .map(res => res.json())
  }

  minusThis(tableId, prodId):Observable<any>{
    return this.http.post(`${this.baseUrl}/quit/${prodId}/${tableId}`, {}, this.options)
      .map(res => res.json())
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
