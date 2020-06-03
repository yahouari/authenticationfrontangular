import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaliteComponent } from './hospitalite.component';

describe('HospitaliteComponent', () => {
  let component: HospitaliteComponent;
  let fixture: ComponentFixture<HospitaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
