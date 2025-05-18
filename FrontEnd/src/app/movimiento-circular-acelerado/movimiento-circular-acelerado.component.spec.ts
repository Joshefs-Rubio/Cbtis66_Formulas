import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoCircularAceleradoComponent } from './movimiento-circular-acelerado.component';

describe('MovimientoCircularAceleradoComponent', () => {
  let component: MovimientoCircularAceleradoComponent;
  let fixture: ComponentFixture<MovimientoCircularAceleradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimientoCircularAceleradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimientoCircularAceleradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
