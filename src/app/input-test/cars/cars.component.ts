import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import {faArrowsAltH} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit { 
  title:string='Input-Output';
  faArrowsAltH=faArrowsAltH;
  animationRun:string='end';
  enterLeave:string='selected';
  isVisible:boolean=true;
  clientHeight:any;

  constructor() {}

  cars:{model:string, age:number}[]=[
    {model:'BMW', age:2011},
    {model:'Reno', age:2000}
  ]

  ngOnInit() { }

  updateCarsList(car:{model:string, age:number}){
    this.cars.push(car);
  };
  clickedDiv(){
    this.animationRun='end';
    setTimeout(() => {
      this.animationRun = 'start';
    }, 3000);
  }
}
