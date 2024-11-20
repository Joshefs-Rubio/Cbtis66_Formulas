import { Component } from '@angular/core';

@Component({
  selector: 'app-bernoulli',
  templateUrl: './bernoulli.component.html',
  styleUrls: ['./bernoulli.component.css']
})
export class BernoulliComponent {
  p1: number | null = null; // Presión inicial
  v1: number | null = null; // Velocidad inicial
  h1: number | null = null; // Altura inicial
  p2: number | null = null; // Presión final
  v2: number | null = null; // Velocidad final
  h2: number | null = null; // Altura final
  rho: number = 1000; // Densidad del fluido (kg/m³)
  g: number = 9.81; // Gravedad (m/s²)
  resultado: string = '';

  calcular() {
    if (
      this.p1 !== null &&
      this.v1 !== null &&
      this.h1 !== null &&
      this.p2 !== null &&
      this.v2 !== null &&
      this.h2 !== null
    ) {
      const energiaInicial =
        this.p1 + 0.5 * this.rho * Math.pow(this.v1, 2) + this.rho * this.g * this.h1;
      const energiaFinal =
        this.p2 + 0.5 * this.rho * Math.pow(this.v2, 2) + this.rho * this.g * this.h2;

      if (Math.abs(energiaInicial - energiaFinal) < 0.001) {
        this.resultado = `El sistema cumple con el Teorema de Bernoulli.`;
      } else {
        this.resultado = `El sistema no cumple con el Teorema de Bernoulli.`;
      }
    } else {
      this.resultado = 'Por favor, complete todos los campos.';
    }
  }
}
