import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { textChangeRangeIsUnchanged } from 'typescript';
import { UsuariosService } from './usuarios.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public estaLogeado: boolean = false;

  constructor(private afauth: AngularFireAuth, private usuariosService: UsuariosService) { }

  isUserLoggedIn(): Observable<boolean> {
    return this.afauth.authState.pipe(
      map(user => !!user)
    );
  }

  async login(email: string, password: string) {
    try {

      let respuesta = await this.afauth.signInWithEmailAndPassword(email, password)

      await this.usuariosService.registrarInicioSesionUsuario(email);

      await this.usuariosService.sumarUltimaSesion(email);

      this.setLocalEmail(email);

      console.log("Emailllll" + email);
      return respuesta;

    } catch (error) {
      console.log('error en login: ', error);
      return null;
    }

  }

  async register(email: string, password: string) {
    try {
      let respuesta = await this.afauth.createUserWithEmailAndPassword(email, password);
      this.setLocalEmail(email);

      return respuesta;
    } catch (error) {
      console.log('error en register: ', error);

      Swal.fire({
        icon: 'error',
        title: 'Intente otra vez',
        text: 'El email ya se encuentra en uso, utilice uno distinto',
      })
      return null;
    }
  }

  setLocalEmail(email: string) {
    localStorage.setItem('email', email);
  }

  deleteLocalEmail() {
    localStorage.setItem('email', '');
  }

  getLocalEmail() {
    return localStorage.getItem('email');
  }


  getUserLogged(): Observable<any> {
    return this.afauth.authState;
  }

  logout() {
    this.deleteLocalEmail();
    this.afauth.signOut();
  }
}
