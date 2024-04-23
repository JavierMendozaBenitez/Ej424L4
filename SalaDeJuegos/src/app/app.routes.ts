import { Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
// import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'home', // estoy en /bienvenida?
    // loadComponent: () => import("./components/bienvenida/bienvenida.component"),
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login', // estoy en /bienvenida?
    // loadComponent: () => import("./components/login/login.component"),
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'quien-soy',
    loadComponent: () => import('./components/quien-soy/quien-soy.component').then((m) => m.QuienSoyComponent),
  },

  // {path: '', component: HomeComponent},
  // {
  //   path: 'home',
  //   redirectTo: 'home',
  // },
  {path: '', component: LoginComponent},
  {
    path: 'login',
    redirectTo: 'login',
  },
  {
    path: '**', //estoy en cualquier ruta?
    component: ErrorComponent,
  },

];
