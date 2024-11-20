import { Component } from '@angular/core';

@Component({
  selector: 'app-ley-continuidad',
  templateUrl: './ley-continuidad.component.html',
  styleUrls: ['./ley-continuidad.component.css']
})
export class LeyContinuidadComponent {
  area1: number | null = null; // Área 1 (A₁)
  velocidad1: number | null = null; // Velocidad 1 (V₁)
  area2: number | null = null; // Área 2 (A₂)
  velocidad2: number | null = null; // Velocidad 2 (V₂)
  resultado: string = ''; // Resultado a mostrar en la interfaz

  calcular() {
    // Verifica que los valores requeridos sean válidos
    if (this.area1 && this.velocidad1 && this.area2) {
      // Cálculo de Q₁
      const caudal1 = this.area1 * this.velocidad1;

      // Cálculo de V₂ si no está definido
      if (!this.velocidad2) {
        const velocidad2 = caudal1 / this.area2;
        this.resultado = `Velocidad 2 (V₂): ${velocidad2.toFixed(2)} m/s.`;
      } else {
        // Validación si Q₁ es igual a Q₂
        const caudal2 = this.area2 * this.velocidad2;
        if (Math.abs(caudal1 - caudal2) < 0.001) {
          this.resultado = `Q₁ = Q₂: El sistema cumple la Ley de Continuidad.`;
        } else {
          this.resultado = `Los caudales no coinciden: Q₁ = ${caudal1.toFixed(
            2
          )} m³/s, Q₂ = ${caudal2.toFixed(2)} m³/s.`;
        }
      }
    } else {
      this.resultado = 'Por favor, ingrese valores válidos en los campos obligatorios.';
    }
  }
}
