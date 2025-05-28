/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vuelo_bernoulliComponent } from './vuelo_bernoulli.component';

describe('Vuelo_bernoulliComponent', () => {
  let component: Vuelo_bernoulliComponent;
  let fixture: ComponentFixture<Vuelo_bernoulliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vuelo_bernoulliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vuelo_bernoulliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
