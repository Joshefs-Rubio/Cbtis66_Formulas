import { Component } from '@angular/core';

@Component({
  selector: 'app-pendulo-simple',
  templateUrl: './pendulo-simple.component.html',
  styleUrl: './pendulo-simple.component.css'
})
export class PenduloSimpleComponent {
  // Opciones: 'T' para Período, 'L' para Longitud, 'g' para Gravedad
  opcion: string = 'T';
  // Variables de entrada
  T: number | null = null; // Período en segundos
  L: number | null = null; // Longitud en metros
  g: number | null = null; // Aceleración de la gravedad en m/s²
  resultado: string = '';
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.opcion === 'T') {
      if (this.L !== null && this.g !== null && this.g > 0) {
        const periodo = 2 * Math.PI * Math.sqrt(this.L / this.g);
        this.resultado = `El período (T) es ${periodo.toFixed(2)} s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para la longitud y la gravedad.';
      }
    } else if (this.opcion === 'L') {
      if (this.T !== null && this.g !== null && this.g > 0) {
        const longitud = this.g * Math.pow(this.T / (2 * Math.PI), 2);
        this.resultado = `La longitud (L) es ${longitud.toFixed(2)} m.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para el período y la gravedad.';
      }
    } else if (this.opcion === 'g') {
      if (this.T !== null && this.L !== null && this.T > 0) {
        const gravedad = (4 * Math.PI * Math.PI * this.L) / (this.T * this.T);
        this.resultado = `La aceleración de la gravedad (g) es ${gravedad.toFixed(2)} m/s².`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para el período y la longitud.';
      }
    } else {
      this.resultado = 'Seleccione una opción de cálculo.';
    }
  }

  toggleGlosario() {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}
