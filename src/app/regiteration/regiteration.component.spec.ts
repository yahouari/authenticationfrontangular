import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterationComponent } from './regiteration.component';

describe('RegiterationComponent', () => {
  let component: RegiterationComponent;
  let fixture: ComponentFixture<RegiterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
