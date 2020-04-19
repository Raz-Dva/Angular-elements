import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../services/exit-react-form-guard.service';
import { ColorsService } from '../services/colors.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: ['.vd_bd-red{box-shadow: 0px 0px 3px 1px red;}']
})
export class ReactiveFormComponent implements OnInit, ComponentCanDeactivate  {

  title:string="Reactive Form";
  reactiveForm : FormGroup;
  preForm ={};
  isSubmited: boolean = false;
  charsCount: number=5;
  logIn: boolean=false;
  private url :string= "http://localhost:3000/users/";
  usersName:{key:string}[]=[];

  constructor(private reqUersService:ColorsService) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', {
        validators:[Validators.required],
        asyncValidators:[this.nameVerification.bind(this)]}),
      email: new FormControl('', [Validators.required, Validators.email]),
      numberPhone: new FormControl(null, [Validators.required, this.validatorNumber.bind(this)]),      
      inconsequential: new FormGroup({
        password: new FormControl('', [Validators.required, this.validatorPassword.bind(this)]),
        checkbox: new FormControl(false)
      })      
    })
  };
  // ---------------------
  onSubmit(){
    this.isSubmited=true;
    this.preForm = this.reactiveForm.value;
     this.reactiveForm.reset();
  }
  // --------------- Password Validator -----------

  validatorPassword(control: FormControl) {
    if(control.value.length < this.charsCount ){
      return{
        'lengthError' : true
      };
    }
    return null
  };
  // --------------- phone number Validator -----------
  validatorNumber(control: FormControl){  
    var patternNumber = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    if (typeof control.value !== 'number' &&  patternNumber.test(control.value)){
      return null
    } 
    return {
      'phoneError':true
    }
  };
  // --------------- Async user name Validator -----------
  nameVerification(control:FormControl): Observable<{ [key: string]: any } | null>{        
    return this.reqUersService.newGetItems(this.url)
    .pipe(map(response=> {
      // console.log(control.value);
      for(var user in response){
        if(response[user]['name'] === control.value.replace(/\s/g, '')) { 
          return {'errorNameValid': true};
        }
      }      
        return null;          
      }
    ))
  };
  
  notAsk(){
    this.logIn=true;
  }

  // --------- Guard canDeactivate -------- 
  canDeactivate() : boolean | Observable<boolean>{     
    if(!this.logIn){
      return confirm("In this URL I use Guard  canDeactivate Guard. Do you want to leave the page?");
    }
    else{
      return true;
    };    
  };   
}
