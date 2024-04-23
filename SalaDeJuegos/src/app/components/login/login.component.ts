import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  usuario = new Usuario();

  constructor() {}

  login() {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExistente = usuariosGuardados.find((usuario: Usuario) => usuario.email === this.usuario.email && usuario.pass === this.usuario.pass);
    if (usuarioExistente) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  }

  register() {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuariosGuardados.push(this.usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    console.log('Usuario registrado correctamente');
  }
}
