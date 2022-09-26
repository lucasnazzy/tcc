import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  teste: any[] = [];
  public visualizarBloco: boolean = false;
  public visualizarTelha: boolean = false;
  public visualizarPiso: boolean = false;
  selectedItem: any;
  constructor() {}

  ngOnInit() {
    this.teste = [
      {
        id: 1,
        name: 'Calcular Blocos',
        image: '../../assets/images/icons/bloco.svg',
      },
      {
        id: 2,
        name: 'Calcular Pisos',
        image: '../../assets/images/icons/piso.svg',
      },
      {
        id: 3,
        name: 'Calcular Telhas',
        image: '../../assets/images/icons/telha.svg',
      },
    ];
  }

  selectedView(id: number) {
    if (id == 1) {
      this.visualizarBloco = true;
      this.visualizarTelha = false;
      this.visualizarPiso = false;
    } else if (id == 2) {
      this.visualizarPiso = true;
      this.visualizarBloco = false;
      this.visualizarTelha = false;
    } else if (id == 3) {
      this.visualizarTelha = true;
      this.visualizarPiso = false;
      this.visualizarBloco = false;
    }
    this.selectedItem = this.teste.find((m) => m.id == id).name;
  }
}
