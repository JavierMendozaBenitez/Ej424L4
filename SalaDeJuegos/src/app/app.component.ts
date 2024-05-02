import { Component } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }],
})
export class AppComponent {
  title = 'SalaDeJuegos';

}
