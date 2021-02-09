import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from './test-service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.html'
})
export class TestComponent implements OnInit {
  title='Unit test Component';
  serviceVisible:boolean;  // getVisible from service
  serviceObservable:string;  // geObservable from servicet 
  testVar:boolean=false;  
  nativeElement: any;

  constructor(private testService:TestService) { }

  ngOnInit() {
    this.serviceVisible = this.testService.getVisible();
    this.testService.getObservable().subscribe(text=> {
      this.serviceObservable = text;
    })
  }

  changeText(){
    this.serviceVisible == false ? this.testService.showItem()  : this.testService.hideItem() ;
    this.serviceVisible = this.testService.getVisible();
  }
}

 