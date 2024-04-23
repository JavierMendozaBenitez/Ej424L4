import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  // Forma nueva
  private router2 = inject(Router);

  // Forma anterior
  constructor(private router: Router){}
  volver(){
    this.router.navigateByUrl('bienvenida');
  }

}
