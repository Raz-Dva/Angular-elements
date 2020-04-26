import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data-service.service';
import {LogService} from '../services/log-service.service';
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html'
})

export class PhoneListComponent implements OnInit {
  title:string='Services';
  faBoxOpen=faBoxOpen;
  phoneList ;
  namePhone:string;
  modelPhone:string; 
  successText:string = 'Well done!';
  errorText:string= 'Incorrect data!';

  constructor(private dataservice: DataService, private logService: LogService) {}

  ngOnInit() {
    this.phoneList = this.dataservice.getList()
  }

  addPhone(element:[HTMLElement, HTMLElement]){
    if ( this.namePhone !== '' &&  this.namePhone !== undefined && this.modelPhone !== '' && this.modelPhone !== undefined){
    this.dataservice.addItemPhone({name:this.namePhone, model:this.modelPhone});  
    this.logService.showHint(element[0], this.successText);
    } else{
      this.logService.showHint(element[1],this.errorText);
    }
    this.namePhone = '';
    this.modelPhone = '';
  }

}
