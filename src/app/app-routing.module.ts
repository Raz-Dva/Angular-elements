import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComandsComponent } from './table-comands/table-comands.component';
import { PipeComponent } from './my-pipe/pipe.component';
import { ColorsComponent } from './colors/colors.component';
import { ProductComponent } from './product/product-description/product.component';
import { NgModelComponent } from './product/product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsGuardService } from './services/colors-guard.service';
import { ExitReactFormGuardService } from './services/exit-react-form-guard.service';

const appRoutes: Routes=[
  {path: '', component: TableComandsComponent},
  {path:'product', component:NgModelComponent, children:[
    {path: ':id/:title',  component:ProductComponent }
  ] },
  {path: 'colors', component: ColorsComponent, canActivate:[ColorsGuardService]},
  {path: 'reactform', component: ReactiveFormComponent,   canDeactivate: [ExitReactFormGuardService]},
  {path: 'powPipe', component: PipeComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo:'/not-found'}
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})


// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
export class AppRoutingModule { }
