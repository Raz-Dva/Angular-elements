import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  
  getItem(): Observable<any>{
    return this.http.get('http://localhost:3000/products/').pipe(map(response=> response), catchError(err=>{return throwError(err)}));
  }


}
