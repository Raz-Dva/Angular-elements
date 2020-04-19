import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Colors } from '../colors/colors.component';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private url:string='http://localhost:3000/colors/';

  constructor( private http: HttpClient )  { }

  getItems(): Observable<any>{
    return this.http.get(this.url)
    .pipe(map(response=>  response), catchError(err => {  
      return throwError(err)}));    
  };
  
  getTitle(){
    return this.http.get('http://localhost:3000/title/').pipe(map(response=>response), catchError(err => {  
      return throwError(err)}));
  };  
  addItem(data:Colors): Observable<any>{  
    // console.log(this.url, data)  
    return this.http.post(this.url, data).pipe(map(response=>response));
  };
  changeItem(data:Colors, Color): Observable<any>{
    return this.http.put(this.url+`${data}`, Color).pipe(map(response=>response));
  };
  deleteItem(data: Colors): Observable<any>{
    return this.http.delete(this.url+`${data.id}`).pipe(map(response=>response));
  }
// ------------------------ test -=--------
  newGetItems(url): Observable<any>{
    return this.http.get(url)
    // .pipe(map(response=>  response), catchError(err => {  
    //   return throwError(err)}));    
  };

}
