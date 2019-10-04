import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerServiceListComponent } from './dinner-service-list.component';

describe('DinnerServiceListComponent', () => {
  let component: DinnerServiceListComponent;
  let fixture: ComponentFixture<DinnerServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
