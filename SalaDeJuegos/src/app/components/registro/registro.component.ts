import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../class/usuario';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private authService: AuthService,
    private usuarioService: UsuariosService, private ruteo: Router) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form:');
    this.Register();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(5)]],
      sexo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.min(6)]],
      terminos: ['', [Validators.required]]
    })
  }

  Register() {
    let usuario = new Usuario(
      this.registerForm.get('nombre')?.value,
      this.registerForm.get('apellido')?.value,
      this.registerForm.get('edad')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('sexo')?.value,

    );

    this.authService.register(usuario.email, this.registerForm.get('password1')?.value)
      .then(res => {
        console.log("se registro", res)
        if (res != null) {
          this.usuarioService.guardarUsuario(usuario);
          this.ruteo.navigateByUrl("juegos");
        }
      })
  }
}
