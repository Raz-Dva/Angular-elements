import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { MyDerective } from './my-derective';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MySwichComponent } from './my-swich/my-swich.component';
import { PipeComponent } from './my-pipe/pipe.component';
import { PowPipe } from './my-pipe/pow.pipe';
import { DynamicPipePipe } from './dynamic-pipe/dynamic-pipe.pipe';
import { ListPipeComponent } from './list-pipe/list-pipe.component';
import {LogService} from './services/log-service.service';
import {DataService} from './services/data-service.service';
import { PhoneListComponent } from './phoneList/phone-list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ColorsService } from './services/colors.service';
import { ColorsComponent } from './colors/colors.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './/app-routing.module';
import { TableComandsComponent } from './table-comands/table-comands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsGuardService } from './services/colors-guard.service';
import { ExitReactFormGuardService } from './services/exit-react-form-guard.service';
import { SharedModule } from './shared/shared.module';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AsyncLoadModule } from './async-load/async-load.module';
@NgModule({
  declarations: [
    AppComponent,
    PowPipe,    
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent,
    MyDerective,
    MySwichComponent,
    PipeComponent,
    DynamicPipePipe,
    ListPipeComponent,
    PhoneListComponent,
    FormComponent,
    ReactiveFormComponent,
    ColorsComponent,
    TableComandsComponent,
    NotFoundComponent
  ],
  imports: [  
    HttpModule,
    HttpClientModule,  
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FontAwesomeModule,
    ProductModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ColorsService, LogService, DataService, ColorsGuardService, ExitReactFormGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
