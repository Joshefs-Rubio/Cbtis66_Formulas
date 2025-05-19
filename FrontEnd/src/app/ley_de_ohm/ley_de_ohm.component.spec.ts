/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ley_de_ohmComponent } from './ley_de_ohm.component';

describe('Ley_de_ohmComponent', () => {
  let component: Ley_de_ohmComponent;
  let fixture: ComponentFixture<Ley_de_ohmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ley_de_ohmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ley_de_ohmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
