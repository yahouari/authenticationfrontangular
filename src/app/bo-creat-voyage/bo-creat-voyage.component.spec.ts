import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoCreatVoyageComponent } from './bo-creat-voyage.component';

describe('BoCreatVoyageComponent', () => {
  let component: BoCreatVoyageComponent;
  let fixture: ComponentFixture<BoCreatVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoCreatVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoCreatVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
