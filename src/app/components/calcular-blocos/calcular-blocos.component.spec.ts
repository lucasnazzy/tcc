import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularBlocosComponent } from './calcular-blocos.component';

describe('CalcularBlocosComponent', () => {
  let component: CalcularBlocosComponent;
  let fixture: ComponentFixture<CalcularBlocosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularBlocosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularBlocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
