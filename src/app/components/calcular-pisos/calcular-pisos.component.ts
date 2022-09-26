import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-pisos',
  templateUrl: './calcular-pisos.component.html',
  styleUrls: ['./calcular-pisos.component.scss'],
})
export class CalcularPisosComponent implements OnInit {
  public formPisos: FormGroup | undefined;
  blocosUsados: number = 0;
  pisosUsados: number = 0;
  totalUsadoNaObra: number = 0;
  numeroCaixas: any;
  quantidadePorCaixa: any;
  metroPiso: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pisosForm();
  }

  calcularPisos() {
    let accountValue: pisosObject = this.formPisos?.getRawValue();

    let pisoResult =
      accountValue?.metrosDePiso / accountValue?.quantidadePisoPorCaixa;

    console.log(pisoResult);

    this.pisosUsados = Math.ceil(pisoResult);

    this.totalUsadoNaObra =
      this.pisosUsados * accountValue?.quantidadePisoPorCaixa;
  }

  pisosForm() {
    this.formPisos = this.fb.group({
      metrosDePiso: ['', Validators.compose([Validators.required])],
      quantidadePisoPorCaixa: ['', Validators.compose([Validators.required])],
    });
  }

  get metrosDePiso() {
    return this.formPisos?.get('metrosDePiso');
  }

  get quantidadePisoPorCaixa() {
    return this.formPisos?.get('quantidadePisoPorCaixa');
  }
}
export class pisosObject {
  metrosDePiso: number = 0;
  quantidadePisoPorCaixa: number = 0;
}
