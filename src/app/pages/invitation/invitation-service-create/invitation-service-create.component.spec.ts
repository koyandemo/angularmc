import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationServiceCreateComponent } from './invitation-service-create.component';

describe('InvitationServiceCreateComponent', () => {
  let component: InvitationServiceCreateComponent;
  let fixture: ComponentFixture<InvitationServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationServiceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
