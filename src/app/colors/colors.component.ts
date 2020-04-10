import { Component, OnInit } from '@angular/core';
import {ColorsService} from  '../services/colors.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


export interface Colors { 
  color:string;
  code:{
    rgba: number[],
    hex: string
  }; 
  id:number;               
}

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styles: [`
  .controls_rgba input{
    margin-right:1px;
    max-width:55px;}
  button, label{
    margin-top:5px;
    margin-bottom:5px;
  }
  .table_colors>tbody>tr>td, .table_colors>tfoot>tr>td, .table_colors>thead>tr>th{
    padding:7px !important;
  }
  .badge_error{
    font-size:14px;
    padding:0;
    white-space: normal;
  } `]
})
export class ColorsComponent implements OnInit {
  title:Observable<Object>;
  formColor: Colors;
  dataColors :Colors[];
 
  RGBA: {};
  rgbaColor:number[]=[];
  error:any;

  constructor(private colorsServ: ColorsService) { }

  ngOnInit() {
    this.getColors();
    this.formColor={      
      color:'',
      code:{
        rgba: [],
        hex: ''
      },
      id:null
    };
    this.RGBA={ r:null, g:null, b:null, a:null };
    this.title = this.colorsServ.getTitle();
    };

  getColors(){
    this.colorsServ.getItems().subscribe(
      response => { this.dataColors = response},
      error => {
        console.log(error.message);
        this.error = 'ERROR: ' + error.message; });
  };
  addColor(){  
    for(var letter in this.RGBA){
      this.formColor.code.rgba.push(this.RGBA[letter])
    };    
    this.colorsServ.addItem(this.formColor).subscribe(response=>this.dataColors.push(response));
    this.formColor.color = '';
    this.formColor.code.rgba = [];
    this.formColor.code.hex = '';
    this.RGBA={r:null, g:null, b:null, a:null};
  };
  changeNameColor(){
    this.colorsServ.changeItem(this.dataColors[1], {id: 2,
      color:'brown',
      code:{
        rgba: [23,23,23,1],
        hex: '#555'
      }
}).subscribe(response=>{
  this.dataColors[1] = response;
      console.log(response);})       
  };
  removeColor(data){
    this.colorsServ.deleteItem(data).subscribe(response=>console.log(response));
    this.getColors();
  }
}
