import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoAccueilComponent } from './bo-accueil.component';

describe('BoAccueilComponent', () => {
  let component: BoAccueilComponent;
  let fixture: ComponentFixture<BoAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
