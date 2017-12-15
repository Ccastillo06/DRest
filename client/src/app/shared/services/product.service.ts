import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment }  from '../../../environments/environment';

@Injectable()
export class ProductService {
  private baseUrl = `${environment.BASE_URL}/product`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });
  private product: Object;

  constructor(private http: Http) {
  }

  getProducts() {
    return this.http.get(`${this.baseUrl}/list`, this.options)
      .map(res => res.json())
  }

  getOneProduct(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/one/${id}`, this.options)
      .map(res => res.json())
  }

  productDelete(id):Observable<any>{
    return this.http.post(`${this.baseUrl}/delete`, {id} , this.options)
  }

  addProdToMenu(id, restaurant):Observable<any>{
    return this.http.post(`${this.baseUrl}/tomenu`, {resId: restaurant, prodId: id}, this.options)
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
