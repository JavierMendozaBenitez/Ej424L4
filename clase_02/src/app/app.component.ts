import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import BienvenidaComponent from './components/bienvenida/bienvenida.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase_02';
}
