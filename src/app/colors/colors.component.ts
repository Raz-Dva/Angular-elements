import { Component, OnInit } from '@angular/core';
import {ColorsService} from  '../services/colors.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';


export interface Colors { 
  color:string;
  code:{
    rgba: number[],
    hex: string
  }; 
  id:number;               
};

class TemplateObj implements Colors {
  color: string; 
  code:{rgba:number[], hex:string};
  id:number;
  constructor(color, rgba, hex, id){
    color;
    this.code={
      rgba,
      hex
    };
    id;
  }     
  // color:'';
  // code:{
  //   rgba: null;
  //   hex: '';
  // };
  // id:null
};

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
  dataColors :Colors[]; 
  chRGBA:{};
  RGBA: {};
  error:any;
  formColor:Colors;
  changeColor:Colors;
  
  private url:string='http://localhost:3000/colors/';


  constructor(private colorsServ: ColorsService) { }

  ngOnInit() {
    this.getColors();
    this.formColor=new TemplateObj('', [], '', null);
    this.changeColor=new TemplateObj('', [], '', null);

    // this.clearRgba(this.chRGBA)
    // this.clearRgba(this.RGBA)

    this.chRGBA={r:null, g:null, b:null, a:null };
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
    this.createRgbaArr(this.RGBA, this.formColor);  
    this.colorsServ.addItem(this.formColor).subscribe(response=>this.dataColors.push(response));
    this.resetForm(this.formColor, this.RGBA);

    // this.formColor.color = '';
    // this.formColor.code.rgba = [];
    // this.formColor.code.hex = '';
    // this.RGBA={r:null, g:null, b:null, a:null};
    this.getColors();

  }; 

  removeColor(data){
    this.colorsServ.deleteItem(data).subscribe(response=>{
      this.getColors();
      return response;
    });
  };
  

  changeDataColor(id){
    this.createRgbaArr(this.chRGBA, this.changeColor);
    this.changeColor.id=id;
    console.log(this.changeColor);
    this.colorsServ.changeItem(id, this.changeColor).subscribe(response=>{
      this.resetForm(this.changeColor, this.chRGBA);
      // this.changeColor.color = '';
      // this.changeColor.code.rgba = [];
      // this.changeColor.code.hex = '';
      // this.chRGBA={r:null, g:null, b:null, a:null};
    this.getColors();
    return response;
      // this.dataColors[id] = response;
        // console.log(response);
    })       
  };

  createRgbaArr(objRgba, objColor){    
    for(var letter in objRgba ){
      objColor.code.rgba.push(objRgba[letter])
    };
  };

  resetForm(form, rgba){
    form.color = '';
    form.code.rgba = [];
    form.code.hex = '';
    // this.clearRgba(rgba);
    rgba={r:null, g:null, b:null, a:null};
  };

  clearRgba(rgba){
    for(var key in rgba){
      if (rgba.hasOwnProperty(key)){
        rgba[key]=null;
      }
    }
  }
// ---------------
  getData(){
    this.createRgbaArr(this.chRGBA, this.changeColor);
    console.log(this.changeColor)
  };
}
