import { Component, OnInit } from '@angular/core';
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons';

interface Cars {
  name: string;
  age:number;
};

@Component({
  selector: 'app-list-pipe',
  templateUrl: './list-pipe.component.html',
  styleUrls: ['./list-pipe.component.css']
})

export class ListPipeComponent implements 
OnInit {
faPuzzlePiece=faPuzzlePiece;
  title='Pipe';
  newArr=[];

  constructor() { }

  findLetter:string='';
  itemName: string='';
  itemAge:number=0;
  errorInput:string='';
  searchCriteria:string='name';
  rxObs:string='';
  pushing:boolean=false;
  listCar: Cars[]=[
    {name:'Ford', age:2011},
    {name:'Audi', age:2011},
    {name:'BMW', age:2002},
    {name:'Nisan', age:1999},
    {name:'Mazda', age:1993}
  ];

  ngOnInit() {
  }

  addItemCar(){
    if(this.itemName === '' ||  this.itemAge  === 0){this.errorInput='Incorect name or age of the car';      
    } else{
      this.listCar.push({name:this.itemName, age:this.itemAge});
      this.errorInput = '';
    }   
  }
  logCh(event){
    this.pushing = event;
    this.searchCriteria = event ? 'age' : 'name';
  }

}
