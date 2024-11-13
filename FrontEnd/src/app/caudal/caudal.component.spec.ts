import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaudalComponent } from './caudal.component';

describe('CaudalComponent', () => {
  let component: CaudalComponent;
  let fixture: ComponentFixture<CaudalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaudalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaudalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
