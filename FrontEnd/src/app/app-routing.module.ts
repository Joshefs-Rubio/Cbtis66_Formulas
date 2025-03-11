import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModeloYoungComponent } from './modelo-young/modelo-young.component';
import { LeyHookeComponent } from './ley-hooke/ley-hooke.component';
import { PrincipioPascalComponent } from './principio-pascal/principio-pascal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CaudalComponent } from './caudal/caudal.component';
import { MovimientoCircularAceleradoComponent } from './movimiento-circular-acelerado/movimiento-circular-acelerado.component';
import { MovimientoCircularComponent } from './movimiento-circular/movimiento-circular.component';
import { PenduloSimpleComponent } from './pendulo-simple/pendulo-simple.component';
import { VelocidadOndaComponent } from './velocidad-onda/velocidad-onda.component';

const routes: Routes = [
  { path: '', redirectTo: '/menuInicio', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menuInicio', component: MenuInicioComponent },
  { path: 'modelo_young', component: ModeloYoungComponent },
  { path: 'ley_hooke', component: LeyHookeComponent },
  { path: 'principio_pascal', component: PrincipioPascalComponent },
  { path : 'nosotros', component: NosotrosComponent },
  { path : 'caudal', component: CaudalComponent },
  { path : 'movimiento_circular_acelerado', component: MovimientoCircularAceleradoComponent },
  { path : 'movimiento_circular', component: MovimientoCircularComponent },
  { path : 'pendulo_simple', component: PenduloSimpleComponent },
  { path : 'velocidad_onda', component: VelocidadOndaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
