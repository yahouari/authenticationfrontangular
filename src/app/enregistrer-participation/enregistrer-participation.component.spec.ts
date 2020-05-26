import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerParticipationComponent } from './enregistrer-participation.component';

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';



describe('EnregistrerParticipationComponent', () => {
  let component: EnregistrerParticipationComponent;
  let fixture: ComponentFixture<EnregistrerParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrerParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrerParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
