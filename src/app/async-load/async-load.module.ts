import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { Routes, RouterModule } from '@angular/router';

const asyncRoutes:Routes = [
  {path:'', component:LazyComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(asyncRoutes)
  ],
  declarations: [LazyComponent]
})
export class AsyncLoadModule { }
