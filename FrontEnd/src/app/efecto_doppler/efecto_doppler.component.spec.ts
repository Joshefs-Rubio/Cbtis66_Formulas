/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Efecto_dopplerComponent } from './efecto_doppler.component';

describe('Efecto_dopplerComponent', () => {
  let component: Efecto_dopplerComponent;
  let fixture: ComponentFixture<Efecto_dopplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Efecto_dopplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Efecto_dopplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
