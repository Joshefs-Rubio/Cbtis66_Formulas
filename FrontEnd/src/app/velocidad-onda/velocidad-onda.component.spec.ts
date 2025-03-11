import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadOndaComponent } from './velocidad-onda.component';

describe('VelocidadOndaComponent', () => {
  let component: VelocidadOndaComponent;
  let fixture: ComponentFixture<VelocidadOndaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocidadOndaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelocidadOndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
