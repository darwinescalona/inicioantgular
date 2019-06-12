import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { ListaEstadosComponent } from './lista-estados/lista-estados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPaisesComponent,
    ListaEstadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
