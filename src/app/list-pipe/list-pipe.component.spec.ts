import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPipeComponent } from './list-pipe.component';

describe('ListPipeComponent', () => {
  let component: ListPipeComponent;
  let fixture: ComponentFixture<ListPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
