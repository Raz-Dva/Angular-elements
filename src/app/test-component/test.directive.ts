import { Directive, ElementRef, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: '[app-test]'
})
export class TestDirective {

  constructor(private element:ElementRef) { }
  @Input('app-test') appTest;
  bgClass:string ='bg-success';

  ngOnInit(){
    this.element.nativeElement.setAttribute("style", "color:white; border: 2px solid black; padding:5px 15px")
  }

    ngOnChanges(changes: {[property: string]: SimpleChange }) {
      let change = changes['appTest'];
      let currentClass = change.currentValue;
      let previousClass = change.previousValue;
      if(change.firstChange){
        this.element.nativeElement.classList.add(currentClass);
      } else{
        this.element.nativeElement.classList.add(currentClass);
        this.element.nativeElement.classList.remove(previousClass);
      } 
  }
}
