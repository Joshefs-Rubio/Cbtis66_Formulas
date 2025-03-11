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
import { MovimientoCircularAceleradoComponent } from './movimiento-circular-acelerado/movimiento-circular-acelerado.component';
import { MovimientoCircularComponent } from './movimiento-circular/movimiento-circular.component';
import { PenduloSimpleComponent } from './pendulo-simple/pendulo-simple.component';
import { VelocidadOndaComponent } from './velocidad-onda/velocidad-onda.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuInicioComponent,
    ModeloYoungComponent,
    LeyHookeComponent,
    PrincipioPascalComponent,
    CaudalComponent,
    MovimientoCircularAceleradoComponent,
    MovimientoCircularComponent,
    PenduloSimpleComponent,
    VelocidadOndaComponent,
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
