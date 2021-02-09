import { Component, OnInit, Output, EventEmitter, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html'

})
export class FormAddItemComponent implements OnInit {
  @Output('onAddCar') carEmitter: EventEmitter<{model:string, age:number}> =  new EventEmitter();

  model:string;
  age:number;

  constructor() { }
  
  ngOnInit() {}
  addCar(){
    this.carEmitter.emit({
      model:this.model,
      age:this.age
    });
    this.model="";
    this.age=null;
  }

}
