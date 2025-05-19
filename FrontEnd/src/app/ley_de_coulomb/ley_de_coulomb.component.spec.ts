/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ley_de_coulombComponent } from './ley_de_coulomb.component';

describe('Ley_de_coulombComponent', () => {
  let component: Ley_de_coulombComponent;
  let fixture: ComponentFixture<Ley_de_coulombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ley_de_coulombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ley_de_coulombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
