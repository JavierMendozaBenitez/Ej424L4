import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../interfaces/chat';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, DatePipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit {

  public mensaje = {
    nuevo: ''
  }

  usuarioLogeado: any = 'null';

  public chats: Chat[] = [
    {
      autor: 'Cargando',
      mensaje: 'buscando chats...',
      horario: ''
    },
  ];

  constructor(private autentService: AuthService, private chatService: ChatService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.autentService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });

    this.chatService.getChats().subscribe(chats => {
      this.chats = chats
    })

  }


  enviarMensaje() {
    console.log(this.mensaje.nuevo);
    console.log(this.usuarioLogeado.email);

    const horarioMensaje = new Date()

    let nuevoHorarioMensaje = this.datePipe.transform(horarioMensaje, 'h:mm a');

    let nuevoMensaje = {
      autor: this.usuarioLogeado.email,
      mensaje: this.mensaje.nuevo,
      horario: nuevoHorarioMensaje
    }

    let id = this.chats.length
    this.chatService.guardarChat(nuevoMensaje, id);

    this.mensaje.nuevo = '';
  }

  scrollUltimoMensaje() {
    let listaMsj = document.getElementsByClassName('mensaje');
    let ultimoMsj: any = listaMsj[(listaMsj.length - 1)];
    let toppos = ultimoMsj.offsetTop;

    const contenedorMensajes = document.querySelector('.contenedorMensajes');
    if (contenedorMensajes instanceof HTMLElement) {
      contenedorMensajes.scrollTop = toppos;
    }
  }


}
