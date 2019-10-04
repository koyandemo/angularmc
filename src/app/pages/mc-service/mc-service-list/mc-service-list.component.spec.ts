import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McServiceListComponent } from './mc-service-list.component';

describe('McServiceListComponent', () => {
  let component: McServiceListComponent;
  let fixture: ComponentFixture<McServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
