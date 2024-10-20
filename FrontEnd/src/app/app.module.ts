import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { ModeloYoungComponent } from './modelo-young/modelo-young.component';
import { LeyHookeComponent } from './ley-hooke/ley-hooke.component';
import { PrincipioPascalComponent } from './principio-pascal/principio-pascal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuInicioComponent,
    ModeloYoungComponent,
    LeyHookeComponent,
    PrincipioPascalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
