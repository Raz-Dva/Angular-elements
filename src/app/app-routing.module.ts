import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComandsComponent } from './table-comands/table-comands.component';
import { PipeComponent } from './my-pipe/pipe.component';
import { ColorsComponent } from './colors/colors.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsGuardService } from './services/colors-guard.service';
import { ExitReactFormGuardService } from './services/exit-react-form-guard.service';

const appRoutes: Routes=[
  {path: '', component: TableComandsComponent},  
  {path: 'colors', component: ColorsComponent, canActivate:[ColorsGuardService]},
  {path: 'reactform', component: ReactiveFormComponent,   canDeactivate: [ExitReactFormGuardService]},
  {path: 'powPipe', component: PipeComponent},
  {path:'lazyRout', loadChildren:'./async-load/async-load.module#AsyncLoadModule'} , 
  // canLoad:[] we can add guard
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo:'/not-found'}
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
