import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyContinuidadComponent } from './ley-continuidad.component';

describe('LeyContinuidadComponent', () => {
  let component: LeyContinuidadComponent;
  let fixture: ComponentFixture<LeyContinuidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyContinuidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeyContinuidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
