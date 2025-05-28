import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModeloYoungComponent } from './modelo-young/modelo-young.component';
import { LeyHookeComponent } from './ley-hooke/ley-hooke.component';
import { PrincipioPascalComponent } from './principio-pascal/principio-pascal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CaudalComponent } from './caudal/caudal.component';
import { LeyContinuidadComponent } from './ley-continuidad/ley-continuidad.component';
import { BernoulliComponent } from './bernoulli/bernoulli.component';
import { Velocidad_del_sonidoComponent } from './velocidad_del_sonido/velocidad_del_sonido.component';
import { Efecto_dopplerComponent } from './efecto_doppler/efecto_doppler.component';
import { Ley_de_coulombComponent } from './ley_de_coulomb/ley_de_coulomb.component';
import { Ley_de_ohmComponent } from './ley_de_ohm/ley_de_ohm.component';
import { MenuJuegosComponent } from './Menu-juegos/Menu-juegos.component';
import { Sopla_vueloComponent } from './sopla_vuelo/sopla_vuelo.component';
import { Tira_estiraComponent } from './tira_estira/tira_estira.component';
import { Vuelo_bernoulliComponent } from './vuelo_bernoulli/vuelo_bernoulli.component';

const routes: Routes = [
  { path: '', redirectTo: '/menuInicio', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menuInicio', component: MenuInicioComponent },
  { path: 'modelo_young', component: ModeloYoungComponent },
  { path: 'ley_hooke', component: LeyHookeComponent },
  { path: 'principio_pascal', component: PrincipioPascalComponent },
  { path : 'nosotros', component: NosotrosComponent },
  { path : 'caudal', component: CaudalComponent },
  { path : 'ley_continuidad', component: LeyContinuidadComponent },
  { path : 'bernoulli', component: BernoulliComponent },
  { path : 'velocidad_del_sonido', component: Velocidad_del_sonidoComponent },
  { path : 'efecto_doppler', component: Efecto_dopplerComponent },
  { path : 'ley_de_coulomb', component: Ley_de_coulombComponent },
  { path : 'ley_de_ohm', component: Ley_de_ohmComponent },
  { path: 'menu_juegos', component: MenuJuegosComponent },
  { path: 'sopla_vuelo', component: Sopla_vueloComponent },
  { path: 'tira_estira', component: Tira_estiraComponent },
  { path: 'vuelo_bernoulli', component: Vuelo_bernoulliComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
