import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularTelhasComponent } from './calcular-telhas.component';

describe('CalcularTelhasComponent', () => {
  let component: CalcularTelhasComponent;
  let fixture: ComponentFixture<CalcularTelhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularTelhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularTelhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
