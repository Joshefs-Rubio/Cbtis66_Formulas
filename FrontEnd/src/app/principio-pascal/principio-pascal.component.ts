import { Component } from '@angular/core';

@Component({
  selector: 'app-principio-pascal',
  templateUrl: './principio-pascal.component.html',
  styleUrls: ['./principio-pascal.component.css']
})
export class PrincipioPascalComponent {
  opcion: string = 'presion';
  presion1: number | null = null;
  fuerza1: number | null = null;
  fuerza2: number | null = null;
  area1: number | null = null;
  area2: number | null = null;
  resultado: string = '';
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.opcion === 'presion') {
      if (this.presion1) {
        this.resultado = `La presión transmitida (P2) es ${this.presion1} Pa`;
      } else {
        this.resultado = 'Por favor, ingrese la presión P1.';
      }
    } else if (this.opcion === 'fuerza') {
      if (this.area1 && this.area2 && this.fuerza1) {
        this.resultado = `La fuerza F2 es ${this.fuerza1 * (this.area2 / this.area1)} N`;
      } else {
        this.resultado = 'Por favor, ingrese los valores de F1, A1 y A2.';
      }
    } else if (this.opcion === 'area') {
      if (this.fuerza1 && this.fuerza2) {
        this.resultado = `El área A2 es ${(this.fuerza2 / this.fuerza1) * (this.area1 ?? 0)} m²`;
      } else {
        this.resultado = 'Por favor, ingrese los valores de F1 y F2.';
      }
    }
  }

  toggleGlosario() {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}
