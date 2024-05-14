import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { PropioComponent } from './propio/propio.component';

const routes: Routes = [
  {
    path: "ahorcado",
    component: AhorcadoComponent
  },
  {
    path: "mayormenor",
    component: MayormenorComponent
  },
  {
    path: "preguntados",
    component: PreguntadosComponent
  },
  {
    path: "propio",
    component: PropioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
