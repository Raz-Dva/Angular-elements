import { Component, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LogService} from '../services/log-service.service';



export class User{
  constructor(public name: string, 
              public password: string, 
              public choice: string,
              public email: string,
              public optionsRadios2:boolean)
  { }
}
// export class Choices {
//   constructor(
//     public id: number,
//   public name: string,
//   public  disabled?: boolean
//   ){}
  
// }

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

  constructor(private logService: LogService) { }
  choice:{ id: number, name: string, disabled?: boolean}[] = [
    {id:1, name:'Choice 1', disabled:true},
    {id:1, name:'Choice 2', disabled:true}];
  title:string='Template forms';
  defaultChoice=this.choice[0].name; 
  public user:User;
  public formUserData={};
  isSubmited=false;

  ngOnInit() {
    this.user={
      name: '',
      password: '',
      choice: 'Choice 1',
      email:'',
      optionsRadios2:true}
  };
  submitForm(x:NgForm){
    this.formUserData =this.formUser.value;
    this.isSubmited = true;
    console.log(x);
    console.log(x.valid);
    this.formUser.reset();
  };
  setVal(){
    // console.log(this.formUser);
    // this.formUser.setValue({
    //   name: "Ivan",
    //   password: "zzz",
    //   email: "as@asd.us",
    //   formGroup1: {
    //     choice: 'Choice 5',
    //     optionsRadios2: false
    //   }
    // })
    this.formUser.form.patchValue({
      formGroup1:{ choice: 'Choice 5'}
    })
  }
}
