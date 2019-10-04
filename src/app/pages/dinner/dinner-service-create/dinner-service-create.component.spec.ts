import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerServiceCreateComponent } from './dinner-service-create.component';

describe('DinnerServiceCreateComponent', () => {
  let component: DinnerServiceCreateComponent;
  let fixture: ComponentFixture<DinnerServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerServiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
