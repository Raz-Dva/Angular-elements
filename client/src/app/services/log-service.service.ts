import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  showHint(element: HTMLElement, textHint){
    $(element).find('.message_text').text(textHint);
    $(element).css('display', 'block');
    setTimeout(()=>$(element).css('display', 'none'), 2000);
  }
  hideHint(element:HTMLElement){
    $(element).css('display', 'none')
  }
}
