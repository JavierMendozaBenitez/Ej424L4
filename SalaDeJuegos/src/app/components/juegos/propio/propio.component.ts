import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-propio',
  templateUrl: './propio.component.html',
  styleUrls: ['./propio.component.css']
})

export class PropioComponent implements OnInit {
  carLeftPosition: number = 100;
  obstacleBottomPosition: number = 600;
  obstacleBottomPosition2: number = 750;
  obstacleLeftPosition: number = 200;
  obstacleLeftPosition2: number = 0;
  gameInterval: any;
  gameRunning: boolean = false;
  crashed: boolean = false;
  obstacleCount: number = 0; // Contador de obstáculos superados
  obstacleCount2: number = 0;
  sumaAutosPasados: number = 0;
  numeroAuto1: number = 3;
  numeroAuto2: number = 3;

  constructor() { }

  @ViewChild('elseBlock') elseBlock: any;

  ngOnInit(): void {
    this.startGame();
  }


  startGame() {
    this.gameRunning = true;
    this.obstacleBottomPosition = 600;
    this.obstacleBottomPosition2 = 750;
    this.crashed = false;
    this.obstacleCount = 0;
    this.obstacleCount2 = 0;
    this.sumaAutosPasados = 0;
    this.gameInterval = setInterval(() => {
      this.moveObstacle();
      this.checkCollision();
    }, 10);
  }

  moveObstacle() {
    if (this.obstacleBottomPosition > -300) {
      this.obstacleBottomPosition -= 5;
      this.obstacleBottomPosition2 -= 5; // Mover el obstáculo hacia arriba
    } else {
      this.obstacleBottomPosition = 600;
      this.obstacleBottomPosition2 = 750;
      this.obstacleCount++; // Incrementa el contador de obstáculos superados
      this.obstacleCount2++;
      this.sumaAutosPasados = this.obstacleCount + this.obstacleCount2;
      // Generar un número aleatorio para decidir la posición horizontal del obstáculo
      const randomHorizontalPosition = Math.floor(Math.random() * 3);
      // Asignar una nueva posición horizontal al obstáculo según el número aleatorio
      const randomCar = Math.floor(Math.random() * 3);
      switch (randomHorizontalPosition) {
        case 0: // Aparece en la izquierda
          this.obstacleLeftPosition = 0;
          this.obstacleLeftPosition2 = 200;
          this.numeroAuto1 = randomCar;
          this.numeroAuto2 = 3;
          break;
        case 1: // Aparece en la derecha
          this.obstacleLeftPosition = 100;
          this.obstacleLeftPosition2 = 0;
          this.numeroAuto1 = randomCar;
          this.numeroAuto1 = 2;
          break;
        case 2: // Aparece en el centro
          this.obstacleLeftPosition = 200;
          this.obstacleLeftPosition2 = 100;
          this.numeroAuto1 = randomCar;
          this.numeroAuto1 = 0;
          break;
      }
    }
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.crashed) {
      if (event.key === 'ArrowLeft' && this.carLeftPosition > 0) {
        this.carLeftPosition -= 100; // Mover el automóvil hacia la izquierda
      } else if (event.key === 'ArrowRight' && this.carLeftPosition < 200) {
        this.carLeftPosition += 100; // Mover el automóvil hacia la derecha
      }
    }
  }

  checkCollision() {
    if (
      (this.carLeftPosition === this.obstacleLeftPosition &&
        this.obstacleBottomPosition < 150 && this.obstacleBottomPosition > 10) || (this.carLeftPosition === this.obstacleLeftPosition2 &&
          this.obstacleBottomPosition2 < 150 && this.obstacleBottomPosition2 > 10)
    ) {
      this.crashed = true;
      clearInterval(this.gameInterval);
      console.log('¡Choque! Juego terminado.');
    } else if (this.sumaAutosPasados === 20) {
      clearInterval(this.gameInterval);
      console.log('¡Ganaste la carrera!');
    }
  }
}
