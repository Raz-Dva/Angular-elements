import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Colors } from '../colors/colors.component';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private url:string='/api/colors/';
  private delUrl:string='/api/delete/';
  private putUrl = '/api/put/'
  

  constructor( private http: HttpClient )  { }

  getItems(): Observable<any>{
    return this.http.get(this.url)
    .pipe(map(response=>response), catchError(err => {  
      return throwError(err)}));    
  };
  
   
  addItem(data:Colors): Observable<any>{  
    return this.http.post(this.url, data).pipe(map(response=>response));
  };

  changeItem(data:Colors): Observable<any>{
    return this.http.put(this.putUrl + data._id, data).pipe(map(response=>response));
  };

  deleteItem(data: String): Observable<any>{
    return this.http.delete(this.delUrl + data).pipe(map(response=>{ response}));
  }

// ------------------------ test -=--------
  newGetItems(url): Observable<any>{
    return this.http.get(url)       
  };

}
