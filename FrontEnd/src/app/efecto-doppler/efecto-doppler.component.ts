import { Component } from '@angular/core';

@Component({
  selector: 'app-efecto-doppler',
  templateUrl: './efecto-doppler.component.html',
  styleUrls: ['./efecto-doppler.component.css']
})
export class EfectoDopplerComponent {
  f: number | null = null;      // frecuencia emitida
  v: number = 343;              // velocidad del sonido
  vo: number | null = null;     // velocidad del observador
  vs: number | null = null;     // velocidad de la fuente
  direccion: string = 'acercando'; // acercando o alejando
  resultado: string = '';
  mostrarGlosario: boolean = false;

  calcular() {
    if (this.f !== null && this.vo !== null && this.vs !== null && this.v > 0) {
      let f_aparente = 0;

      if (this.direccion === 'acercando') {
        f_aparente = this.f * ((this.v + this.vo) / (this.v - this.vs));
      } else if (this.direccion === 'alejando') {
        f_aparente = this.f * ((this.v - this.vo) / (this.v + this.vs));
      }

      this.resultado = `La frecuencia percibida (f') es ${f_aparente.toFixed(2)} Hz.`;
    } else {
      this.resultado = 'Por favor, ingrese todos los valores correctamente.';
    }
  }

  toggleGlosario() {
    this.mostrarGlosario = !this.mostrarGlosario;
  }
}
