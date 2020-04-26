import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LazyComponent } from './lazy/lazy.component';
import { Routes, RouterModule } from '@angular/router';
import { MyDerective } from './../my-derective';
import { PowPipe } from './lazy/pow.pipe';


const asyncRoutes:Routes = [
  {path:'', component:LazyComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(asyncRoutes)
  ],
  declarations: [LazyComponent, MyDerective, PowPipe]
})
export class AsyncLoadModule { }
