import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate{
  canDeactivate: () => Observable<boolean> | boolean;
};

export class ExitReactFormGuardService implements CanDeactivate<ComponentCanDeactivate>{
  
  canDeactivate(component:ComponentCanDeactivate)  : Observable<boolean> | boolean{
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  constructor() { }
}
