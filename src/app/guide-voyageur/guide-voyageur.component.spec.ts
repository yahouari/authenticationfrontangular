import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideVoyageurComponent } from './guide-voyageur.component';

describe('GuideVoyageurComponent', () => {
  let component: GuideVoyageurComponent;
  let fixture: ComponentFixture<GuideVoyageurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideVoyageurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideVoyageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
