import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})


export class RegistroComponent {
  constructor(private authF: AuthService, private router: Router) { }

  email: string = "";
  password: string = "";

  manejarRegistro() {
    this.authF.resgistrar(this.email, this.password).then(() => {
      this.router.navigate(['/home']);
    }).catch(error => {
      console.error('Error en el registro:', error);
    });
  }
}
