/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sopla_vueloComponent } from './sopla_vuelo.component';

describe('Sopla_vueloComponent', () => {
  let component: Sopla_vueloComponent;
  let fixture: ComponentFixture<Sopla_vueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sopla_vueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sopla_vueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
