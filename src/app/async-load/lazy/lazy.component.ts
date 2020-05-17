import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {
  faBars=faBars;
  titleClass: string ='ngClass';
  tittleIf:string='ngIf';
  titleStyle:string='ngStyle';
  titlePipe:string='my Pipe'
  data:number=0;
  wrong=false;
  condition:boolean=true;
  colorElement:string ='green';


  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.condition=!this.condition;
  };

}
