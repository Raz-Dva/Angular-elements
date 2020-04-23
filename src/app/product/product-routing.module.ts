import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list.component';
import { ProductComponent } from './product-description/product.component';



const productsRoutes:Routes=[
      {path:'product', component:ProductList, children:[{path: ':id/:title',  component:ProductComponent }]
 }
];
@NgModule({
      imports:[RouterModule.forChild(productsRoutes)],
      exports:[RouterModule]
})
export class ProductRoutingModul {}
