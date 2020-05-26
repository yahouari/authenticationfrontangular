import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipationComponent } from './admin-participation.component';

describe('AdminParticipationComponent', () => {
  let component: AdminParticipationComponent;
  let fixture: ComponentFixture<AdminParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
