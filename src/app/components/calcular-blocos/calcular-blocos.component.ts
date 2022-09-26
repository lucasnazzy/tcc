import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-blocos',
  templateUrl: './calcular-blocos.component.html',
  styleUrls: ['./calcular-blocos.component.scss'],
})
export class CalcularBlocosComponent implements OnInit {
  blocosUsados: number = 0;
  totalUsadoNaObra: number = 0;
  public formBlocos: FormGroup | undefined;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.blocosForm();
  }

  // calcular quantidade de blocos
  calcularBlocos() {
    let accountValue: blocosObject = this.formBlocos?.getRawValue();

    console.log(accountValue);

    let blocosResult = accountValue.comprimento * accountValue.altura;

    console.log(blocosResult);

    let blocosFinais = blocosResult / 1000;

    console.log(blocosFinais);

    this.blocosUsados = Math.ceil(blocosFinais);
  }

  blocosForm() {
    this.formBlocos = this.fb.group({
      altura: ['', Validators.compose([Validators.required])],
      comprimento: ['', Validators.compose([Validators.required])],
    });
  }

  get altura() {
    return this.formBlocos?.get('altura');
  }

  get comprimento() {
    return this.formBlocos?.get('comprimento');
  }
}

export class blocosObject {
  altura: number = 0;
  comprimento: number = 0;
}
