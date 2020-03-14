import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  title:string='ngIF and ng-template.';
  condition:boolean=true;
 

  constructor() { }
  toggle(){
    this.condition=!this.condition;
  };
  ngOnInit() {
  }

}
