import { Component} from '@angular/core';

@Component({
  selector: 'app-ley_de_ohm',
  templateUrl: './ley_de_ohm.component.html',
  styleUrls: ['./ley_de_ohm.component.css']
})
export class Ley_de_ohmComponent{

  opcion: string = 'voltaje';

  voltaje: number | null = null;
  corriente: number | null = null;
  resistencia: number | null = null;

  resultado: string = '';

  calcular() {
    if (this.opcion === 'voltaje') {
      if (this.corriente !== null && this.resistencia !== null) {
        const v = this.corriente * this.resistencia;
        this.resultado = `El voltaje es: ${v.toFixed(2)} V`;
      } else {
        this.resultado = 'Faltan datos para calcular el voltaje.';
      }
    }

    else if (this.opcion === 'corriente') {
      if (this.voltaje !== null && this.resistencia !== null && this.resistencia !== 0) {
        const i = this.voltaje / this.resistencia;
        this.resultado = `La corriente es: ${i.toFixed(2)} A`;
      } else {
        this.resultado = 'Faltan datos o resistencia no puede ser cero.';
      }
    }

    else if (this.opcion === 'resistencia') {
      if (this.voltaje !== null && this.corriente !== null && this.corriente !== 0) {
        const r = this.voltaje / this.corriente;
        this.resultado = `La resistencia es: ${r.toFixed(2)} Ω`;
      } else {
        this.resultado = 'Faltan datos o la corriente no puede ser cero.';
      }
    }

    else if (this.opcion === 'potencia') {
      if (this.voltaje !== null && this.corriente !== null) {
        const p = this.voltaje * this.corriente;
        this.resultado = `La potencia eléctrica es: ${p.toFixed(2)} W`;
      } else {
        this.resultado = 'Faltan datos para calcular la potencia.';
      }
    }
  }
}
