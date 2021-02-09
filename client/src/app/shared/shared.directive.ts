import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
      selector:'[headColor]'
})
export class ColorDirective {
      @HostBinding('style.color') color = 'grey';
}
