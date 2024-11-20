import { Component } from '@angular/core';

@Component({
  selector: 'app-caudal',
  templateUrl: './caudal.component.html',
  styleUrls: ['./caudal.component.css']
})
export class CaudalComponent {
  opcion: string = ''; // Opción seleccionada en el formulario
  area: number | null = null; // Área de la sección transversal (A)
  velocidad: number | null = null; // Velocidad del fluido (V)
  caudal: number | null = null; // Caudal volumétrico (Q)
  densidad: number | null = null; // Densidad del fluido (P)
  volumen: number | null = null; // Volumen del fluido (V)
  tiempo: number | null = null; // Tiempo (t)
  resultado: string = ''; // Resultado para mostrar en la interfaz

  // Método para calcular el caudal volumétrico, flujo másico o caudal por volumen y tiempo
  calcular() {
    // Calcular caudal volumétrico (Q = A * V)
    if (this.opcion === 'caudal') {
      if (this.area !== null && this.velocidad !== null) {
        const caudalVolumetrico = this.area * this.velocidad;
        this.resultado = `El caudal volumétrico (Q) es ${caudalVolumetrico.toFixed(2)} m³/s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores para el área y la velocidad.';
      }
    }
    // Calcular flujo másico (F = Q * P)
    else if (this.opcion === 'flujo') {
      if (this.caudal !== null && this.densidad !== null) {
        const flujoMasico = this.caudal * this.densidad;
        this.resultado = `El flujo másico (F) es ${flujoMasico.toFixed(2)} kg/s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores para el caudal y la densidad.';
      }
    }
    // Calcular caudal por volumen y tiempo (Q = V / t)
    else if (this.opcion === 'volumen-tiempo') {
      if (this.volumen !== null && this.tiempo !== null && this.tiempo > 0) {
        const caudalPorVolumenTiempo = this.volumen / this.tiempo;
        this.resultado = `El caudal (Q) es ${caudalPorVolumenTiempo.toFixed(2)} m³/s.`;
      } else {
        this.resultado = 'Por favor, ingrese valores válidos para el volumen y el tiempo.';
      }
    }
    // Si no se ha seleccionado ninguna opción
    else {
      this.resultado = 'Seleccione una opción de cálculo.';
    }
  }
}
