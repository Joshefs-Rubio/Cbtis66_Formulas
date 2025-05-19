import { Component} from '@angular/core';

@Component({
  selector: 'app-efecto_doppler',
  templateUrl: './efecto_doppler.component.html',
  styleUrls: ['./efecto_doppler.component.css']
})
export class Efecto_dopplerComponent{

  opcion: string = 'frecuenciaPercibida';
  frecuenciaEmitida: number | null = null;
  frecuenciaPercibida: number | null = null;
  velocidadObservador: number | null = null;
  velocidadSonido: number | null = null;
  resultado: string = '';

  calcular() {
    if (this.velocidadSonido === null || this.velocidadSonido <= 0) {
      this.resultado = 'Por favor ingrese una velocidad del sonido válida.';
      return;
    }

    if (this.opcion === 'frecuenciaPercibida') {
      if (this.frecuenciaEmitida !== null && this.velocidadObservador !== null) {
        const fPrima = this.frecuenciaEmitida * ((this.velocidadSonido + this.velocidadObservador) / this.velocidadSonido);
        this.resultado = `La frecuencia percibida (f') es: ${fPrima.toFixed(2)} Hz`;
      } else {
        this.resultado = 'Por favor ingrese la frecuencia emitida y la velocidad del observador.';
      }

    } else if (this.opcion === 'velocidadObservador') {
      if (this.frecuenciaEmitida !== null && this.frecuenciaPercibida !== null) {
        const vObservador = ((this.frecuenciaPercibida / this.frecuenciaEmitida) * this.velocidadSonido) - this.velocidadSonido;
        this.resultado = `La velocidad del observador (vₒ) es: ${vObservador.toFixed(2)} m/s`;
      } else {
        this.resultado = 'Por favor ingrese la frecuencia percibida y la frecuencia emitida.';
      }

    } else if (this.opcion === 'frecuenciaEmitida') {
      if (this.frecuenciaPercibida !== null && this.velocidadObservador !== null) {
        const f = this.frecuenciaPercibida / ((this.velocidadSonido + this.velocidadObservador) / this.velocidadSonido);
        this.resultado = `La frecuencia emitida (f) es: ${f.toFixed(2)} Hz`;
      } else {
        this.resultado = 'Por favor ingrese la frecuencia percibida y la velocidad del observador.';
      }
    }
  }
}
