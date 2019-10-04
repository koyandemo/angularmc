import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationServiceListComponent } from './invitation-service-list.component';

describe('InvitationServiceListComponent', () => {
  let component: InvitationServiceListComponent;
  let fixture: ComponentFixture<InvitationServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
