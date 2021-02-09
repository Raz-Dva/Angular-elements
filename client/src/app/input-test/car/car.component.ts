import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
})
export class CarComponent implements OnInit, AfterViewInit {
  @Input('carItem') car: any
  constructor() { }
  ngOnInit() { }
  ngAfterViewInit() { }
}
