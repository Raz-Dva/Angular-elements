import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  title:string = 'ngModel';
  itemInput:string ='';
  textEmpty: string='';
  arrStr: Array<string> = ['Mustard', 'Ketchup' ];

  constructor() { }

  ngOnInit() {
  }
  addItem(){
    if(this.itemInput === ''){
      this.textEmpty = 'This input is empty';
    } else{
      this.arrStr.push(this.itemInput);
      this.textEmpty= '';
    }
    this.itemInput = '';

  };

}
