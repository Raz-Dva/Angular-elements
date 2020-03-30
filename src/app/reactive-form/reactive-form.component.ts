import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: ['.vd_bd-red{box-shadow: 0px 0px 3px 1px red;}']
})
export class ReactiveFormComponent implements OnInit {

  title:string="Reactive Forms";
  reactiveForm : FormGroup;
  preForm ={};
  isSubmited: boolean = false;
  charsCount: number=5;

  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('',  [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),

      numberPhone: new FormControl(null, [Validators.required, this.validatorNumber.bind(this)]),
      
      inconsequential: new FormGroup({
        password: new FormControl('', [Validators.required, this.validatorPassword.bind(this)]),
      checkbox: new FormControl(false)
      })      
    })
  };
  onSubmit(){
    this.isSubmited=true;
    this.preForm = this.reactiveForm.value;
    // this.reactiveForm.reset();
  }
  // --------------- Form Validator -----------
  validatorPassword(control: FormControl) {
    if(control.value.length < this.charsCount ){
      return{
        'lengthError' : true
      };
    }
    return null
  };
  validatorNumber(control: FormControl){  
    var patternNumber = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (typeof control.value !== 'number' &&  patternNumber.test(control.value)){
      return null
    } 
    return {
      'phoneError':true
    }
  }
  // --------------- Async Form Validator -----------
  // validatorEmail(control:FormControl): Promise<any>{
  //   return new Promise((resolve, reject)=>{
      // нужно  сравнить с существующими никнеймами с json файла Посмотреть урок асинхрон. валидация
  //   })
  // }
  
}
