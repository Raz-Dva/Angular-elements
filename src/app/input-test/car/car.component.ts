import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [`:host{border-bottom:1px solid #c7c7c7; display:block; padding:2px 0 10px}`]
})
export class CarComponent implements OnInit {
  @Input('carItem') car:any

  constructor() { }

  ngOnInit() { }

  

}
