import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySwichComponent } from './my-swich.component';

describe('MySwichComponent', () => {
  let component: MySwichComponent;
  let fixture: ComponentFixture<MySwichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySwichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
