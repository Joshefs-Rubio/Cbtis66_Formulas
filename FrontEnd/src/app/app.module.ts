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
