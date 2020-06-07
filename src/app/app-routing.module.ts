import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComandsComponent } from './table-comands/table-comands.component';
import { ColorsComponent } from './colors/colors.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsGuardService } from './services/colors-guard.service';
import { ExitReactFormGuardService } from './services/exit-react-form-guard.service';
import { PhoneListComponent } from './phoneList/phone-list.component';
import { FormComponent } from './form/form.component';
import { CarsComponent } from './input-test/cars/cars.component';
import { TestComponent } from './test-component/test-component';
import { CarsPipeComponent } from './cars-pipe/cars-pipe.component';

const appRoutes: Routes=[
  {path: '', component: TableComandsComponent, data: { animation: 'slide1' }},
  {path: 'test', component: TestComponent, data: { animation: 'slide2' }},
  {path: 'decorators', component: CarsComponent, data: { animation: 'slide3' }},
  {path: 'services', component: PhoneListComponent, data: { animation: 'slide4' }},
  {path: 'pipe', component: CarsPipeComponent, data: { animation: 'slide5' }},
  {path: 'colors', component: ColorsComponent, data: { animation: 'slide6' }
   , canActivate:[ColorsGuardService]
},
  {path: 'drivenform', component: FormComponent, data: { animation: 'slide7' }},
  {path: 'reactform', component: ReactiveFormComponent,   canDeactivate: [ExitReactFormGuardService],data: { animation: 'slide8' }},
  {path:'lazyRoute', loadChildren:'./async-load/async-load.module#AsyncLoadModule', data: { animation: 'slide9' }} , 
  {path: 'services', component: PhoneListComponent, data: { animation: 'slide9' }},  
  // canLoad:[] we can add guard  
  {path: 'not-found', component: NotFoundComponent, data: { animation: 'slide10' }},
  {path: '**', redirectTo:'/not-found'}
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
