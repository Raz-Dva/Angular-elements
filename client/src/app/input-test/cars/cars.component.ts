import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import {faArrowsAltH} from '@fortawesome/free-solid-svg-icons';
import {FormAddItemComponent} from '../form-add-item/form-add-item.component';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles:[`:host(app-form-add-item) { display:block; background:red;}`],
})
export class CarsComponent implements OnInit, AfterContentInit { 
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
  ngAfterContentInit(){}

  updateCarsList(car:{model:string, age:number}){
    this.cars.push(car);
  };
  
}
