import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {
  titleClass: string = 'ngClass';
  tittleIf: string = 'ngIf';
  titleStyle: string = 'ngStyle';
  wrong = false;
  condition: boolean = true;
  colorElement: string = 'green';
  faBars = faBars;
 
  constructor() { }

  ngOnInit() {
  }

  toggle(e: Event) {
    e.preventDefault()
    this.condition = !this.condition;
  };

}
