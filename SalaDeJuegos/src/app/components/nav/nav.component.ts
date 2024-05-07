import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../class/usuario';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent implements OnInit {
  currentUserEmail: string | null = null;

  isUserLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(loggedIn => {
      this.isUserLoggedIn = loggedIn;
      console.log(this.isUserLoggedIn);
    });
  }

  finalizar() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  getCurrentUserEmail(): string | null {
    return this.currentUserEmail;
  }
}
