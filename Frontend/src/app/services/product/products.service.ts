import { Injectable } from '@angular/core';

/**Http*/
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**Rxjs */
import { BehaviorSubject, Observable } from 'rxjs'

/**Models */
import { Product } from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  /** Create observable to share productstList array info by subscribe */
  private productstList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
  public productstList$: Observable<Product[]> = this.productstList.asObservable();

  products = 'http://localhost:8080/products/';
  header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })

  constructor( private httpClient: HttpClient) { }

  /**HttpRequest list products */
  public list(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.products + 'list', 
          { headers : this.header });
  }
  
  /**HttpRequest product unique */
  public search(value: string): Observable<any> {
    return this.httpClient.get<any>(this.products + `search/${value}`);
  }
  
  /**HttpRequest product with category */
  public searchByCategory(value: number): Observable<any> {
    return this.httpClient.get<any>(this.products + `searchCategory/${value}`);
  }
  
  /**Request for product filter and update new values */
  updateResultList(updatedList: Product[]) {
    this.productstList.next(updatedList);
  }

}
