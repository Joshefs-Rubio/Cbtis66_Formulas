import { Component} from '@angular/core';

@Component({
  selector: 'app-ley_de_coulomb',
  templateUrl: './ley_de_coulomb.component.html',
  styleUrls: ['./ley_de_coulomb.component.css']
})
export class Ley_de_coulombComponent{

  opcion: string = 'fuerzaEntreCargas';

  q1: number | null = null;
  q2: number | null = null;
  q3: number | null = null;

  r: number | null = null;
  r13: number | null = null;
  r23: number | null = null;

  fuerza: number | null = null;

  resultado: string = '';

  k: number = 8.99e9;

  calcular() {
    if (this.opcion === 'fuerzaEntreCargas') {
      if (this.q1 && this.q2 && this.r) {
        const f = this.k * ((this.q1 * this.q2) / (this.r ** 2));
        this.resultado = `La fuerza entre las cargas es: ${f.toExponential(2)} N`;
      } else {
        this.resultado = 'Por favor complete todos los campos.';
      }
    } else if (this.opcion === 'distancia') {
      if (this.q1 && this.q2 && this.fuerza && this.fuerza !== 0) {
        const r = Math.sqrt((this.k * this.q1 * this.q2) / this.fuerza);
        this.resultado = `La distancia entre cargas es: ${r.toFixed(4)} m`;
      } else {
        this.resultado = 'Ingrese valores válidos.';
      }
    } else if (this.opcion === 'cargaDesconocida') {
      if (this.fuerza && this.q2 && this.r && this.r !== 0) {
        const q1 = (this.fuerza * (this.r ** 2)) / (this.k * this.q2);
        this.resultado = `La carga desconocida (q) es: ${q1.toExponential(2)} C`;
      } else {
        this.resultado = 'Ingrese datos válidos.';
      }
    } else if (this.opcion === 'superposicion') {
      if (this.q1 && this.q2 && this.q3 && this.r13 && this.r23) {
        const f13 = this.k * ((this.q1 * this.q3) / (this.r13 ** 2));
        const f23 = this.k * ((this.q2 * this.q3) / (this.r23 ** 2));

        const sentido13 = Math.sign(this.q1 * this.q3);
        const sentido23 = Math.sign(this.q2 * this.q3);

        const fTotal = (sentido13 * f13) + (sentido23 * f23);

        this.resultado = `La fuerza neta sobre la carga q₃ es: ${fTotal.toExponential(2)} N`;
      } else {
        this.resultado = 'Por favor llene todos los datos para la superposición.';
      }
    }
  }
}
