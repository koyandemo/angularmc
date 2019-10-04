import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McServiceDetailComponent } from './mc-service-detail.component';

describe('McServiceDetailComponent', () => {
  let component: McServiceDetailComponent;
  let fixture: ComponentFixture<McServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
