import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarsComponent } from './status-bars.component';

describe('StatusBarsComponent', () => {
  let component: StatusBarsComponent;
  let fixture: ComponentFixture<StatusBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
