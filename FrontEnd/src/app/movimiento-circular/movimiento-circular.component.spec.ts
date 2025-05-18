import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoCircularComponent } from './movimiento-circular.component';

describe('MovimientoCircularComponent', () => {
  let component: MovimientoCircularComponent;
  let fixture: ComponentFixture<MovimientoCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimientoCircularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimientoCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
