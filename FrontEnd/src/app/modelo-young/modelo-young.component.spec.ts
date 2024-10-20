import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloYoungComponent } from './modelo-young.component';

describe('ModeloYoungComponent', () => {
  let component: ModeloYoungComponent;
  let fixture: ComponentFixture<ModeloYoungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloYoungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloYoungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
