import { Component } from '@angular/core';

@Component({
  selector: 'app-ley-hooke',
  templateUrl: './ley-hooke.component.html',
  styleUrls: ['./ley-hooke.component.css']
})
export class LeyHookeComponent {
  opcion: string = 'fuerza';
  fuerza: number | null = null;
  constante: number | null = null;
  deformacion: number | null = null;
  resultado: string = '';
  
  // Variable para controlar la visibilidad del glosario
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.opcion === 'fuerza' && this.constante && this.deformacion) {
      this.resultado = `La Fuerza elástica (F) es ${this.constante * this.deformacion} N`;
    } else if (this.opcion === 'constante' && this.fuerza && this.deformacion) {
      this.resultado = `La Constante elástica (k) es ${this.fuerza / this.deformacion} N/m`;
    } else if (this.opcion === 'deformacion' && this.fuerza && this.constante) {
      this.resultado = `La Deformación (x) es ${this.fuerza / this.constante} m`;
    } else {
      this.resultado = 'Por favor, ingrese los valores válidos.';
    }
  }

  // Método para alternar la visibilidad del glosario
  toggleGlosario
  () {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}