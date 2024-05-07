import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuario = {
    password: '',
    email: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  Login() {
    console.log(this.usuario)
    const { email, password } = this.usuario;
    this.authService.login(email, password).then((res: any) => {
      console.log("se logeo", res)
      this.router.navigate(["/home"]);
    })
  }

  relleno1() {
    this.authService.login("test10@test.com", "test1010");
    this.router.navigate(["/home"]);
    this.usuario.email = "";
    this.usuario.password = "";
  }

  relleno2() {
    this.authService.login("test20@test.com", "test2020");
    this.router.navigate(["/home"]);
    this.usuario.email = "";
    this.usuario.password = "";
  }

  relleno3() {
    this.authService.login("test30@test.com", "test3030");
    this.router.navigate(["/home"]);
    this.usuario.email = "";
    this.usuario.password = "";
  }

  LogOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
