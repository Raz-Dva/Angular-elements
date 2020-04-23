import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../product-description/product.component';
import { ProductList } from '../product-list/product-list.component';
import { ProductRoutingModul } from '../product-routing.module';
import { SharedModule } from 'src/app/hsared/shared.module';

@NgModule({
  declarations: [ProductComponent, ProductList],
  imports: [
    CommonModule,
    ProductRoutingModul,
    SharedModule
  ]  
})
export class ProductModule { }
