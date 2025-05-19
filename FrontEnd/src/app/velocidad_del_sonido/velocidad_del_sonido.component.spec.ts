/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Velocidad_del_sonidoComponent } from './velocidad_del_sonido.component';

describe('Velocidad_del_sonidoComponent', () => {
  let component: Velocidad_del_sonidoComponent;
  let fixture: ComponentFixture<Velocidad_del_sonidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Velocidad_del_sonidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Velocidad_del_sonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
