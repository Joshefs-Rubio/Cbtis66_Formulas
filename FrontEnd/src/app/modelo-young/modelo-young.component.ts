import { Component } from '@angular/core';

@Component({
  selector: 'app-modelo-young',
  templateUrl: './modelo-young.component.html',
  styleUrls: ['./modelo-young.component.css']
})
export class ModeloYoungComponent {

  opcion: string = 'moduloYoung'; // Por defecto, calcular Módulo de Young
  tension: number | null = null;
  deformacion: number | null = null;
  moduloYoung: number | null = null;
  resultado: string = '';

  calcular() {
    if (this.opcion === 'moduloYoung') {
      // Calcular el Módulo de Young (E)
      if (this.tension !== null && this.deformacion !== null && this.deformacion !== 0) {
        const moduloYoung = this.tension / this.deformacion;
        this.resultado = `El Módulo de Young (E) es: ${moduloYoung.toFixed(2)} Pa`;
      } else {
        this.resultado = 'Por favor ingrese valores válidos para la tensión y la deformación.';
      }
    } else if (this.opcion === 'tension') {
      // Calcular la tensión (σ)
      if (this.moduloYoung !== null && this.deformacion !== null) {
        const tension = this.moduloYoung * this.deformacion;
        this.resultado = `La Tensión (σ) es: ${tension.toFixed(2)} Pa`;
      } else {
        this.resultado = 'Por favor ingrese valores válidos para el Módulo de Young y la deformación.';
      }
    } else if (this.opcion === 'deformacion') {
      // Calcular la deformación (ε)
      if (this.moduloYoung !== null && this.tension !== null) {
        const deformacion = this.tension / this.moduloYoung;
        this.resultado = `La Deformación (ε) es: ${deformacion.toFixed(4)}`;
      } else {
        this.resultado = 'Por favor ingrese valores válidos para la tensión y el Módulo de Young.';
      }
    }
  }
}
