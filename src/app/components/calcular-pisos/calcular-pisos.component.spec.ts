import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularPisosComponent } from './calcular-pisos.component';

describe('CalcularPisosComponent', () => {
  let component: CalcularPisosComponent;
  let fixture: ComponentFixture<CalcularPisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularPisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
