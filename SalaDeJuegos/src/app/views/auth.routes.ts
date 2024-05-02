import { Routes } from "@angular/router";
import { ErrorComponent } from '../components/error/error.component';

export const routes: Routes = [

  { path: 'login', loadComponent: () => import('../components/login/login.component').then((m) => m.LoginComponent) },
  { path: 'quien-soy', loadComponent: () => import('../components/quien-soy/quien-soy.component').then((m) => m.QuienSoyComponent) },
  { path: 'registro', loadComponent: () => import('../components/registro/registro.component').then((m) => m.RegistroComponent) },
  { path: '', redirectTo: '/page-not-found', pathMatch: 'full' },
];

