import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listPhones= [
    {name:'Samsung', model:'sx-132'},
    {name: 'Nokia', model:'nm-g56'}
  ];
  getList(){
    return this.listPhones
  }
  addItemPhone(item){
    this.listPhones.push(item);
  }
}
