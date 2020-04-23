import { NgModule } from '@angular/core';
import { ColorDirective } from './shared.directive';
// import { ColorDirective } from '/shared.derective';

@NgModule({
      declarations: [ColorDirective],
      exports: [ColorDirective]
})
export class SharedModule {}