import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentComponent ]
    });
     fixture = TestBed.createComponent(TestComponentComponent);   // приспособление
    component = fixture.debugElement.componentInstance;
  }); 

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag with title 'test-component works!'`, ()=>{
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('h1').textContent;
    expect(text).toEqual('test-component works!');
  })
});

