import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoUpdateVoyageComponent } from './bo-update-voyage.component';

describe('BoUpdateVoyageComponent', () => {
  let component: BoUpdateVoyageComponent;
  let fixture: ComponentFixture<BoUpdateVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoUpdateVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoUpdateVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
