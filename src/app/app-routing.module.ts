import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { ListaEstadosComponent } from './lista-estados/lista-estados.component';
import { MainComponent } from './main/main.component';

const routes: Routes =
[
    { path: 'Principal', component: MainComponent },
    { path: 'Paises', component: ListaPaisesComponent },
    { path: 'Regiones', component: ListaEstadosComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
