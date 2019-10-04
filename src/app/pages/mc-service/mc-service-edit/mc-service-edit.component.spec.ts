import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McServiceEditComponent } from './mc-service-edit.component';

describe('McServiceEditComponent', () => {
  let component: McServiceEditComponent;
  let fixture: ComponentFixture<McServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
