import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  private isVisible:boolean=false;

  showItem(){
    this.isVisible=true;
  }

  hideItem(){
    this.isVisible=false;
  }

  getVisible(){
    return this.isVisible;
  }

  getObservable():Observable<string>{
    return of('Hello from TestService  with a 3s delay').pipe(delay(3000))
  }
}
