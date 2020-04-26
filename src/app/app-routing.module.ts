import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComandsComponent } from './table-comands/table-comands.component';
import { ColorsComponent } from './colors/colors.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsGuardService } from './services/colors-guard.service';
import { ExitReactFormGuardService } from './services/exit-react-form-guard.service';
import { PhoneListComponent } from './phoneList/phone-list.component';
import { ListPipeComponent } from './list-pipe/list-pipe.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes=[
  {path: '', component: TableComandsComponent},
  {path: 'services', component: PhoneListComponent},
  {path: 'pipe', component: ListPipeComponent},
  {path: 'colors', component: ColorsComponent
  // , canActivate:[ColorsGuardService]
},
  {path: 'drivenform', component: FormComponent},
  {path: 'reactform', component: ReactiveFormComponent,   canDeactivate: [ExitReactFormGuardService]},
  {path:'lazyRoute', loadChildren:'./async-load/async-load.module#AsyncLoadModule'} , 
  {path: 'services', component: PhoneListComponent},  
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
