import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getItem(): Observable<any> {
    return this.http.get('/api/products/').pipe(map(response => response),
        catchError(err => { return throwError(err) }));
  }
}
