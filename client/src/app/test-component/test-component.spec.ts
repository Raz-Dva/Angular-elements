import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect, inject } from '@angular/core/testing';

import { TestComponent } from './test-component';
import { TestService } from './test-service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TestDirective } from './test.directive';
import { ElementRef } from '@angular/core';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let serviceTest:TestService;
  // let directive:TestDirective;
  let element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, TestDirective ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    });
     fixture = TestBed.createComponent(TestComponent);   // приспособление
    component = fixture.debugElement.componentInstance;
    serviceTest = fixture.debugElement.injector.get(TestService);
    // directive=new TestDirective()
    element=component.nativeElement;

  }); 
  // testing component

  it('should create the component', () => {    
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag with title 'Unit test Component'`, ()=>{
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('h1').textContent;
    expect(text).toEqual('Unit test Component');
  });

  it(  `should have as title 'Unit test Component'`, ()=>{
    const testComponent = fixture.debugElement.componentInstance;
    expect(testComponent.title).toEqual('Unit test Component');  
  })

  // testing service
  it('should inject TestService', ()=>{
    fixture.detectChanges();
    expect(component.serviceVisible).toEqual(serviceTest.getVisible())
  })

  it('the method should show the item', ()=>{
    serviceTest.showItem(); 
    component.serviceVisible = serviceTest.getVisible();  
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('.alert').textContent;
    expect(text).toEqual('This Item is Visible')
  })

  // testing async
  it(`should get getObservable if async `,  async(()=>{
    spyOn(serviceTest, 'getObservable').and.returnValue(of('Hello from TestService  with a 3s delay').pipe(delay(4000)));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
    expect(component.serviceObservable).toEqual('Hello from TestService  with a 3s delay')
    })
  }))
  // testing directive
 
});

