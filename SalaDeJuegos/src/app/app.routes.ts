import { Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import("./components/home/home.component").then(m => m.HomeComponent)
  },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent) },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'quien-soy',
    loadComponent: () => import("./components/quien-soy/quien-soy.component").then(m => m.QuienSoyComponent)
  },
  {
    path: 'chat',
    loadComponent: () => import("./components/chat/chat.component").then(m => m.ChatComponent)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./components/juegos/juegos.module').then(m => m.JuegosModule)
  },
];
