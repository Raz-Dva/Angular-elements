import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { MyDerective } from './my-derective';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MySwichComponent } from './my-swich/my-swich.component';
import { PipeComponent } from './pipe/pipe.component';
import { PowPipe } from './pipe/pow.pipe';
import { DynamicPipePipe } from './dynamic-pipe/dynamic-pipe.pipe';
import { ListPipeComponent } from './list-pipe/list-pipe.component';
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
    ListPipeComponent
  ],
  imports: [    
    FormsModule,
    BrowserModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
