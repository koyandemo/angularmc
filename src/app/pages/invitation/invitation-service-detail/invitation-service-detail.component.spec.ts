import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationServiceDetailComponent } from './invitation-service-detail.component';

describe('InvitationServiceDetailComponent', () => {
  let component: InvitationServiceDetailComponent;
  let fixture: ComponentFixture<InvitationServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
