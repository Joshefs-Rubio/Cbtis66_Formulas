import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipioPascalComponent } from './principio-pascal.component';

describe('PrincipioPascalComponent', () => {
  let component: PrincipioPascalComponent;
  let fixture: ComponentFixture<PrincipioPascalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipioPascalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipioPascalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
