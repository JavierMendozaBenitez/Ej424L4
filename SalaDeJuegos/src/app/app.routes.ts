import { Routes } from '@angular/router';

// import { ErrorComponent } from './components/error/error.component';
// // import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent) },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent) },
  { path: 'registro', loadComponent: () => import('./components/registro/registro.component').then(mod => mod.RegistroComponent) },
  { path: 'quien-soy', loadComponent: () => import('./components/quien-soy/quien-soy.component').then(mod => mod.QuienSoyComponent) },
  // { path: '**', loadComponent: () => import('./components/error/error.component').then(mod => mod.ErrorComponent) },
];
