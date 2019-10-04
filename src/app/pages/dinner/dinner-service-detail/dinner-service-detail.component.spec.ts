import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerServiceDetailComponent } from './dinner-service-detail.component';

describe('DinnerServiceDetailComponent', () => {
  let component: DinnerServiceDetailComponent;
  let fixture: ComponentFixture<DinnerServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
