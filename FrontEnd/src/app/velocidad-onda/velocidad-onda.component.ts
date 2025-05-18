import { Component } from '@angular/core';

@Component({
  selector: 'app-velocidad-onda',
  templateUrl: './velocidad-onda.component.html',
  styleUrls: ['./velocidad-onda.component.css']
})
export class VelocidadOndaComponent {
  // Opciones: 'v' para velocidad, 'f' para frecuencia, 'λ' para longitud de onda.
  opcion: string = 'v';
  // Variables de entrada
  v: number | null = null;       // Velocidad de onda (m/s)
  f: number | null = null;       // Frecuencia (Hz)
  lambda: number | null = null;  // Longitud de onda (m)
  resultado: string = '';
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.opcion === 'v') {
      // v = f * λ
      if (this.f !== null && this.lambda !== null) {
        const velocidad = this.f * this.lambda;
        this.resultado = `La velocidad de onda (v) es ${velocidad.toFixed(2)} m/s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para la frecuencia y la longitud de onda.';
      }
    } else if (this.opcion === 'f') {
      // f = v / λ
      if (this.v !== null && this.lambda !== null && this.lambda > 0) {
        const frecuencia = this.v / this.lambda;
        this.resultado = `La frecuencia (f) es ${frecuencia.toFixed(2)} Hz.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para la velocidad y la longitud de onda.';
      }
    } else if (this.opcion === 'λ') {
      // λ = v / f
      if (this.v !== null && this.f !== null && this.f > 0) {
        const longitudOnda = this.v / this.f;
        this.resultado = `La longitud de onda (λ) es ${longitudOnda.toFixed(2)} m.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para la velocidad y la frecuencia.';
      }
    } else {
      this.resultado = 'Seleccione una opción de cálculo.';
    }
  }

  toggleGlosario() {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}
