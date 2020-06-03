import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoListVoyagesComponent } from './bo-list-voyages.component';

describe('BoListVoyagesComponent', () => {
  let component: BoListVoyagesComponent;
  let fixture: ComponentFixture<BoListVoyagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoListVoyagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoListVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
