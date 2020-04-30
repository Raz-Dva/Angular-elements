import { Component, OnInit, ViewChild } from '@angular/core';
import {ColorsService} from  '../services/colors.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
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
  } ;
};

class ObjRGBA{
r; g; b; a;
  constructor(val){
    this.r=val;
    this.g=val;
    this.b=val;
    this.a=val;
  }
};


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html'
  
})
export class ColorsComponent implements OnInit {

  @ViewChild('changeForm') changeForm : NgForm;

  
  title:Observable<Object>;
  dataColors :Colors[]; 
  chRGBA:{};
  RGBA: {};
  requestError:any;
  formColor:Colors;
  changeColor:Colors;
  showing:boolean=true;
  idElement:number;
  positionTop: string;
  nameColor: any;
  


  constructor(private colorsServ: ColorsService) { }

  ngOnInit() {
    this.getColors();
    this.formColor=new TemplateObj('', [], '', null);
    this.changeColor=new TemplateObj('', [], '', null);
    this.chRGBA=new ObjRGBA(null);
    this.RGBA=new ObjRGBA(null);
    this.title = this.colorsServ.getTitle();
    };

  getColors(){
    this.colorsServ.getItems().subscribe(
      response => { this.dataColors = response},
      error => {
        this.requestError = 'ERROR: ' + error.message; });
  };
  addColor(){  
    this.createRgbaArr(this.RGBA, this.formColor);  
    this.colorsServ.addItem(this.formColor).subscribe(response=>this.dataColors.push(response));
    this.resetForm(this.formColor, this.RGBA);
    this.getColors();
  }; 

  removeColor(data){
    this.colorsServ.deleteItem(data).subscribe(response=>{
      this.getColors();
      return response;
    });
  };
  closeChangeForm(){
    this.showing=true;
  }
  openChangeForm(id, ev){
    this.showing=false;
    var obj = ev.target.closest('.gradeX');
    var posX = obj.offsetTop; 
    this.positionTop = (posX + obj.offsetHeight) + 'px';
    this.changeColor.id=id;
  };
  changeDataColor(){

    
    this.createRgbaArr(this.chRGBA, this.changeColor);
    this.colorsServ.changeItem(this.changeColor.id, this.changeColor).subscribe(response=>{
      this.resetForm(this.changeColor, this.chRGBA);
      this.getColors();
      this.showing=true;
    return response;
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
    this.clearRgba(rgba);
    form.id=null;
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
  validDataColor(x, y, z){
      // console.log(x.value);

if(x.value || y.value || z.value == 100)
    console.log(x);


  }
}
