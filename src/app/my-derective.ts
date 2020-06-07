import { Directive, Renderer2, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDerective]'
})
export class MyDerective {
  title:string = 'Create your own directives';
  @Input('color') color;
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
    const buttonElement=this.renderer.createElement('button');
    const text = this.renderer.createText('Text');
      this.renderer.appendChild(buttonElement, text);
      this.renderer.appendChild(this.elementRef.nativeElement, buttonElement);
  }

  

  @HostListener('mouseenter') onMouseIn() {
    this.changeColor(this.color);
    // console.log(this.color)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.changeColor(null)
  }

  changeColor(color:string){
    this.elementRef.nativeElement.style.color=color
  }

  
  @HostBinding("style.fontStyle") get getCursor(){
    return "italic";
}
}






