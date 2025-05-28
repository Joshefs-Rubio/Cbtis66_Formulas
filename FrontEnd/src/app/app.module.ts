import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { ModeloYoungComponent } from './modelo-young/modelo-young.component';
import { LeyHookeComponent } from './ley-hooke/ley-hooke.component';
import { PrincipioPascalComponent } from './principio-pascal/principio-pascal.component';
import { CaudalComponent } from './caudal/caudal.component';
import { LeyContinuidadComponent } from './ley-continuidad/ley-continuidad.component';
import { BernoulliComponent } from './bernoulli/bernoulli.component';
import { Velocidad_del_sonidoComponent } from './velocidad_del_sonido/velocidad_del_sonido.component';
import { Efecto_dopplerComponent } from './efecto_doppler/efecto_doppler.component';
import { Ley_de_coulombComponent } from './ley_de_coulomb/ley_de_coulomb.component';
import { Ley_de_ohmComponent } from './ley_de_ohm/ley_de_ohm.component';
import { MenuJuegosComponent } from './Menu-juegos/Menu-juegos.component';
import { Tira_estiraComponent } from './tira_estira/tira_estira.component';
import { Vuelo_bernoulliComponent } from './vuelo_bernoulli/vuelo_bernoulli.component';
import { Sopla_vueloComponent } from './sopla_vuelo/sopla_vuelo.component';

@NgModule({
  declarations: [								
    AppComponent,
    DashboardComponent,
    MenuInicioComponent,
    ModeloYoungComponent,
    LeyHookeComponent,
    PrincipioPascalComponent,
    CaudalComponent,
    LeyContinuidadComponent,
    BernoulliComponent,
      Velocidad_del_sonidoComponent,
      Efecto_dopplerComponent,
      Ley_de_coulombComponent,
      Ley_de_ohmComponent,
      MenuJuegosComponent,
      Tira_estiraComponent,
      Vuelo_bernoulliComponent,
      Sopla_vueloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
