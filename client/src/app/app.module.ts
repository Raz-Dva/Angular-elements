import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicPipePipe } from './dynamic-pipe/dynamic-pipe.pipe';
import { CarsPipeComponent } from './cars-pipe/cars-pipe.component';
// import {LogService} from './services/log-service.service';
// import {DataService} from './services/data-service.service';
import { PhoneListComponent } from './phoneList/phone-list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { ColorsService } from './services/colors.service';
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
import { CarsComponent } from './input-test/cars/cars.component';
import { CarComponent } from './input-test/car/car.component';
import { FormAddItemComponent } from './input-test/form-add-item/form-add-item.component';
import { TestComponent } from './test-component/test-component';
import { TestDirective } from './test-component/test.directive';
import { PowPipe } from './cars-pipe/pow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DynamicPipePipe,
    CarsPipeComponent,
    PhoneListComponent,
    FormComponent,
    ReactiveFormComponent,
    ColorsComponent,
    TableComandsComponent,
    NotFoundComponent,
    CarsComponent,
    CarComponent,
    FormAddItemComponent,
    TestComponent,
    TestDirective,
    PowPipe
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
  providers: [ColorsGuardService, ExitReactFormGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
