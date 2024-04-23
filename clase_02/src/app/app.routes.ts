import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

export const routes: Routes = [
  {
    path: 'bienvenida', // estoy en /bienvenida?
    // loadComponent: () => import("./components/bienvenida/bienvenida.component"),
    loadComponent: () => import('./components/bienvenida/bienvenida.component').then((m) => m.BienvenidaComponent),
  },
  {
    path: 'login', // estoy en /bienvenida?
    // loadComponent: () => import("./components/login/login.component"),
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'community',
    loadComponent: () => import('./components/community/community.component').then((m) => m.CommunityComponent),
  },

  {path: '', component: BienvenidaComponent},
  {
    path: 'bienvenido',
    redirectTo: 'bienvenida',
  },
  {
    path: '**', //estoy en cualquier ruta?
    component: ErrorComponent,
  },

];
