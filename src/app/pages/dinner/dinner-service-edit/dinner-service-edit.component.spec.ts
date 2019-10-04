import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerServiceEditComponent } from './dinner-service-edit.component';

describe('DinnerServiceEditComponent', () => {
  let component: DinnerServiceEditComponent;
  let fixture: ComponentFixture<DinnerServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
