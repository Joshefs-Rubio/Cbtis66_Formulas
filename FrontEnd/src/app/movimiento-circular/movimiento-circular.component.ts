import { Component } from '@angular/core';

@Component({
  selector: 'app-movimiento-circular',
  templateUrl: './movimiento-circular.component.html',
  styleUrl: './movimiento-circular.component.css'
})
export class MovimientoCircularComponent {
  // Opciones: 'T' para período, 'r' para radio, 'v' para velocidad
  opcion: string = 'T';
  // Variables de entrada
  T: number | null = null; // Período en segundos
  r: number | null = null; // Radio en metros
  v: number | null = null; // Velocidad en m/s
  resultado: string = '';
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.opcion === 'T') {
      // Fórmula: T = 2πr / v
      if (this.r !== null && this.v !== null && this.v > 0) {
        const periodo = (2 * Math.PI * this.r) / this.v;
        this.resultado = `El período (T) es ${periodo.toFixed(2)} s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para el radio y la velocidad.';
      }
    } else if (this.opcion === 'r') {
      // Fórmula: r = (T * v) / (2π)
      if (this.T !== null && this.v !== null && this.v > 0) {
        const radio = (this.T * this.v) / (2 * Math.PI);
        this.resultado = `El radio (r) es ${radio.toFixed(2)} m.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para el período y la velocidad.';
      }
    } else if (this.opcion === 'v') {
      // Fórmula: v = 2πr / T
      if (this.T !== null && this.r !== null && this.T > 0) {
        const velocidad = (2 * Math.PI * this.r) / this.T;
        this.resultado = `La velocidad (v) es ${velocidad.toFixed(2)} m/s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para el período y el radio.';
      }
    } else {
      this.resultado = 'Seleccione una opción de cálculo.';
    }
  }

  toggleGlosario() {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}
