import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-telhas',
  templateUrl: './calcular-telhas.component.html',
  styleUrls: ['./calcular-telhas.component.scss'],
})
export class CalcularTelhasComponent implements OnInit {
  blocosUsados: number = 0;
  totalUsadoNaObra: number = 0;
  public formTelhas: FormGroup | undefined;
  telhaResult: number = 0;
  areaTotal: number = 0;
  totalTelhas: number = 0;
  totalTelhaDesperdicio: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.telhasForm();
  }
  calcularTelhas() {
    let accountValue: blocosObject = this.formTelhas?.getRawValue();

    let blocosResult = accountValue.comprimento * accountValue.largura;

    this.telhaResult = Math.ceil(blocosResult);
  }
  calcularAreaTotal() {
    let caidaTelha = 1.5;
    let totalArea = caidaTelha * this.telhaResult;

    this.areaTotal = Math.ceil(totalArea);
  }
  calcularTotalTelhas() {
    let telhaPortuguesa = 17;
    let totalDeTelhas = this.areaTotal * telhaPortuguesa;

    this.totalTelhas = Math.ceil(totalDeTelhas);
  }
  calcularTotalTelhasDesperdicio() {
    let valuePorcent = (5 * this.totalTelhas) / 100;
    let totalTelhaDesperdicio = this.totalTelhas + valuePorcent;

    this.totalTelhaDesperdicio = Math.ceil(totalTelhaDesperdicio);
  }

  telhasForm() {
    this.formTelhas = this.fb.group({
      largura: ['', Validators.compose([Validators.required])],
      comprimento: ['', Validators.compose([Validators.required])],
    });
  }

  get largura() {
    return this.formTelhas?.get('largura');
  }

  get comprimento() {
    return this.formTelhas?.get('comprimento');
  }
}

export class blocosObject {
  largura: number = 0;
  comprimento: number = 0;
}
