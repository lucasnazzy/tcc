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
  metrosDePiso: any;
  porcantagemRodape: any;
  validationRodape: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pisosForm();
  }

  calcularPisos() {
    let accountValue: pisosObject = this.formPisos?.getRawValue();

    if (!this.porcantagemRodape) {
      let rodape = (accountValue.metrosDePiso * 10) / 100;

      accountValue.metrosDePiso = accountValue.metrosDePiso + rodape;
    }

    console.log(accountValue?.metrosDePiso);

    let pisoResult =
      accountValue?.metrosDePiso / accountValue?.quantidadePisoPorCaixa;

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

  get quantidadePisoPorCaixa() {
    return this.formPisos?.get('quantidadePisoPorCaixa');
  }

  rodapePorcentagem(rodape: boolean) {
    if (this.porcantagemRodape || !this.porcantagemRodape)
      this.validationRodape = true;
  }
}
export class pisosObject {
  metrosDePiso: number = 0;
  quantidadePisoPorCaixa: number = 0;
}
