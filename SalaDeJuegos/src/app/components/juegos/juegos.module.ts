import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { PropioComponent } from './propio/propio.component';

@NgModule({
  declarations: [
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    PropioComponent
  ],
  imports: [CommonModule, JuegosRoutingModule],
  providers: [
    // MessageService

  ]
})
export class JuegosModule { }
