import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDerective]'
})
export class MyDerective {
  title:string = 'Create your own directives';
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 

    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
  }
}
