import { Component, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class User{
  constructor(public name: string, 
              public password: string, 
              public choice: string,
              public email: string,
              public optionsRadios2:string)
  { }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  @ViewChild('formUser') formUser : NgForm;

  constructor() { }
  choice:{ id: number, name: string, disabled?: boolean}[] = [
    {id:1, name:'Choice 1', disabled:true},
    {id:1, name:'Choice 2', disabled:true}];
  title:string='Template Driven';
  defaultChoice=this.choice[0].name; 
  user:User;
  formUserData={};
  isSubmited=false;

  ngOnInit() {
    this.user={
      name: '',
      password: '',
      email:'',
      choice: 'Choice 1',
      optionsRadios2:'option3'}
  };
  submitForm(x:NgForm){
    this.formUserData =this.formUser.value;
    this.isSubmited = true;
    this.formUser.reset();
  };    
  setVal(){
    this.formUser.form.patchValue({
    formGroup1:{ choice: 'Choice 5'}
    })
  }
}
