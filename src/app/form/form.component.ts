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
  templateUrl: './form.component.html',
  styles: [`
  select.ng-pristine.ng-invalid.ng-touched,
    select.ng-invalid.ng-touched.ng-dirty
  input.ng-pristine.ng-invalid.ng-touched:focus,
  input.ng-invalid.ng-touched.ng-dirty:focus,
  input.ng-pristine.ng-invalid.ng-touched,
    input.ng-invalid.ng-touched.ng-dirty{
      border:2px solid #ff7373;
      border-radius: 3px;
      box-shadow: 0px 0px 4px  1px rgb(255, 176, 176);
      outline:transparent
    }
    .form-horizontal .help-inline{
      color:#ff7373;
    }
  `]
})
export class FormComponent implements OnInit {

  @ViewChild('formUser') formUser : NgForm;

  constructor() { }
  choice:{ id: number, name: string, disabled?: boolean}[] = [
    {id:1, name:'Choice 1', disabled:true},
    {id:1, name:'Choice 2', disabled:true}];
  title:string='Template Driven';
  defaultChoice=this.choice[0].name; 
  public user:User;
  public formUserData={};
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
    var afterReset = 'option3';
    this.formUser.reset();
  };    
  setVal(){
    this.formUser.form.patchValue({
      formGroup1:{ choice: 'Choice 5'}
    })
  }
}
