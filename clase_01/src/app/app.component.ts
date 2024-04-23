import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  edadUno: number = 0;
  edadDos:number = 0;
  promedio: number = 0;

  materia: string = "Lab IV";

  calcular(): void {
    this.promedio = (this.edadUno + this.edadDos) / 2;
  }

  limpiar():void {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
}
}





//Ejercicio 1

// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     FormsModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   edadUno: number = 0;
//   edadDos:number = 0;
//   promedio: number = 0;

//   materia: string = "Lab IV";

//   calcular(): void {
//     this.promedio = (this.edadUno + this.edadDos) / 2;
//   }

//   limpiar():void {
//     this.edadUno = 0;
//     this.edadDos = 0;
//     this.promedio = 0;
// }
// }





















// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     FormsModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   protected title = 'clase_01';

//   constructor(){}

//   protected onBtn(){
//     this.title = 'hola';

//   }
//   ngOnInit(){
//     console.log("Arranca");
//   }

//   ngAfterViewChecked(): void{
//     console.log('checked');
//   }

//   ngOnDestroy(): void{
//     console.log('destroy');
//   }
// }
