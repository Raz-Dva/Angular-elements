import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NgModelComponent } from './ng-model/ng-model.component';
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

@NgModule({
  declarations: [
    PowPipe,
    AppComponent,
    NgModelComponent,
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
    ReactiveFormComponent
  ],
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [LogService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
