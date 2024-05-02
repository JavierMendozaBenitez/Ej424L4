import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  constructor(private authF: AuthService, private router: Router, private log: LogService) { }

  mail: string = "";
  password: string = "";

  async enviar() {
    await this.authF.login(this.mail, this.password);
    console.log(this.mail);
    this.log.guardarInfo(this.mail);
    this.router.navigate(["/home"]);
    this.mail = "";
    this.password = "";
  }

  relleno1() {
    this.authF.login("test1@test.com", "test11");
    this.router.navigate(["/home"]);
    this.mail = "";
    this.password = "";
  }

  relleno2() {
    this.authF.login("test2@test.com", "test22");
    this.router.navigate(["/home"]);
    this.mail = "";
    this.password = "";
  }

  relleno3() {
    this.authF.login("test3@test.com", "test33");
    this.router.navigate(["/home"]);
    this.mail = "";
    this.password = "";
  }
}
