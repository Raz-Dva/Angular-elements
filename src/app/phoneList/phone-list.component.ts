import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service.service';
import {LogService} from '../services/log-service.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html'
})

export class PhoneListComponent implements OnInit {
  title:string='Service'
  phoneList ;
  namePhone:string;
  modelPhone:string; 

  constructor(private dataservice: DataService, private logService: LogService) {}

  ngOnInit() {
    this.phoneList = this.dataservice.getList()
  }

  addPhone(element:[HTMLElement, HTMLElement]){
    if ( this.namePhone !== '' &&  this.namePhone !== undefined && this.modelPhone !== '' && this.modelPhone !== undefined){
    this.dataservice.addItemPhone({name:this.namePhone, model:this.modelPhone});  
    this.logService.hint(element[0]);
    } else{
      this.logService.hint(element[1]);
    }
    this.namePhone = '';
    this.modelPhone = '';
  }

}