import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../class/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  authenticator = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.authenticator.user$.subscribe(person => {
      if (person) {
        this.authenticator.currentUser.set({
          email: person.email!,
          nombrecompleto: person.displayName!,
          contraseña: ""
        });
      }
      else {
        this.authenticator.currentUser.set(null);
      }
    });
  }

  finalizar() {
    this.authenticator.logOut().then(() => this.router.navigateByUrl('/login'));
  }
}
