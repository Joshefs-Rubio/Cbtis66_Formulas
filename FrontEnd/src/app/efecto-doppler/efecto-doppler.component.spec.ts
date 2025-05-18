import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectoDopplerComponent } from './efecto-doppler.component';

describe('EfectoDopplerComponent', () => {
  let component: EfectoDopplerComponent;
  let fixture: ComponentFixture<EfectoDopplerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfectoDopplerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfectoDopplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
