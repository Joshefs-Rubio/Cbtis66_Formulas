import { Component } from '@angular/core';

@Component({
  selector: 'app-velocidad_del_sonido',
  templateUrl: './velocidad_del_sonido.component.html',
  styleUrls: ['./velocidad_del_sonido.component.css']
})
export class Velocidad_del_sonidoComponent{

  opcion: string = 'velocidad'; // Por defecto, calcular velocidad
  modulo: number | null = null;
  densidad: number | null = null;
  velocidad: number | null = null;
  resultado: string = '';

  calcular() {
    if (this.opcion === 'velocidad') {
      if (this.modulo !== null && this.densidad !== null && this.densidad > 0) {
        const velocidad = Math.sqrt(this.modulo / this.densidad);
        this.resultado = `La velocidad del sonido es: ${velocidad.toFixed(2)} m/s`;
      } else {
        this.resultado = 'Por favor ingrese valores válidos para B y la densidad.';
      }
    } else if (this.opcion === 'modulo') {
      if (this.velocidad !== null && this.densidad !== null) {
        const modulo = this.densidad * Math.pow(this.velocidad, 2);
        this.resultado = `El módulo volumétrico (B) es: ${modulo.toFixed(2)} Pa`;
      } else {
        this.resultado = 'Por favor ingrese valores válidos para la velocidad y la densidad.';
      }
    }
  }
}
