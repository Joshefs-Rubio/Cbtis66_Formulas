/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tira_estiraComponent } from './tira_estira.component';

describe('Tira_estiraComponent', () => {
  let component: Tira_estiraComponent;
  let fixture: ComponentFixture<Tira_estiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tira_estiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tira_estiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
