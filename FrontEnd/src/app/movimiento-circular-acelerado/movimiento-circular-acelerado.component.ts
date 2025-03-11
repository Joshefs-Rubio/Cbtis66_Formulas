import { Component } from '@angular/core';

@Component({
  selector: 'app-movimiento-circular-acelerado',
  templateUrl: './movimiento-circular-acelerado.component.html',
  styleUrl: './movimiento-circular-acelerado.component.css'
})
export class MovimientoCircularAceleradoComponent {
  // Opciones: 'θ' para desplazamiento angular, 'α' para aceleración angular, 'ω' para velocidad angular final.
  opcion: string = 'θ';
  // Variables de entrada
  omega0: number | null = null;  // Velocidad angular inicial (ω₀) en rad/s
  alpha: number | null = null;   // Aceleración angular (α) en rad/s²
  t: number | null = null;       // Tiempo (t) en s
  theta: number | null = null;   // Desplazamiento angular (θ) en radianes
  T: number | null = null;       // En caso de calcular ω final, se puede usar T para el período si se desea, pero aquí no es requerido
  resultado: string = '';
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.opcion === 'θ') {
      // Calcular desplazamiento angular: θ = ω₀ · t + ½ · α · t²
      if (this.omega0 !== null && this.alpha !== null && this.t !== null) {
        const desplazamiento = (this.omega0 * this.t) + (0.5 * this.alpha * this.t * this.t);
        this.resultado = `El desplazamiento angular (θ) es ${desplazamiento.toFixed(2)} rad.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para ω₀, α y t.';
      }
    } else if (this.opcion === 'α') {
      // Calcular aceleración angular: α = 2(θ – ω₀ · t) / t²
      if (this.omega0 !== null && this.theta !== null && this.t !== null && this.t > 0) {
        const aceleracion = 2 * (this.theta - (this.omega0 * this.t)) / (this.t * this.t);
        this.resultado = `La aceleración angular (α) es ${aceleracion.toFixed(2)} rad/s².`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para ω₀, θ y t.';
      }
    } else if (this.opcion === 'ω') {
      // Calcular velocidad angular final: ω = ω₀ + α · t
      if (this.omega0 !== null && this.alpha !== null && this.t !== null) {
        const omegaFinal = this.omega0 + (this.alpha * this.t);
        this.resultado = `La velocidad angular final (ω) es ${omegaFinal.toFixed(2)} rad/s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para ω₀, α y t.';
      }
    } else {
      this.resultado = 'Seleccione una opción de cálculo.';
    }
  }

  toggleGlosario() {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}
