
import { Component, OnInit } from '@angular/core';
// import 'rxjs';
// import  {Observable, of} from 'rxjs';
// import {delay} from 'rxjs/operators';
interface Cars {
  name: string;
  age:number;
};

@Component({
  selector: 'app-list-pipe',
  templateUrl: './list-pipe.component.html',
  styleUrls: ['./list-pipe.component.css']
})
export class ListPipeComponent implements OnInit {
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
      // console.log(this.listCar)
    }   
  }
  // onCh(event){
    
  // }

  logCh(event){
    this.pushing = event;
    this.searchCriteria = event ? 'age' : 'name';
    // console.log(this.searchCriteria );
  }
    // var resultArr = this.listCar.filter(word=>word['name'] === 'Ford')
    // var num =2335 +'';
    // console.log(num.toLowerCase().indexOf('2'.toLowerCase()) !== -1)
    // indexed(){
    //   of('some text').pipe(delay(3000)).subscribe(x=>this.rxObs = x);
    // }
   

}
