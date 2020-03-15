import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  hint(element: HTMLElement){
    $(element).css('display', 'block');
    setTimeout(()=>$(element).css('display', 'none'), 2000);
  }
}
