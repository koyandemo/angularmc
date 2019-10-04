import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationServiceEditComponent } from './invitation-service-edit.component';

describe('InvitationServiceEditComponent', () => {
  let component: InvitationServiceEditComponent;
  let fixture: ComponentFixture<InvitationServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
