import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenduloSimpleComponent } from './pendulo-simple.component';

describe('PenduloSimpleComponent', () => {
  let component: PenduloSimpleComponent;
  let fixture: ComponentFixture<PenduloSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenduloSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenduloSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
