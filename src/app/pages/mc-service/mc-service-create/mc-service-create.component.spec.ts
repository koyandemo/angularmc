import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McServiceCreateComponent } from './mc-service-create.component';

describe('McServiceCreateComponent', () => {
  let component: McServiceCreateComponent;
  let fixture: ComponentFixture<McServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McServiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
