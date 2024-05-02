import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, user, User, authState } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { Usuario } from '../class/usuario';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  user$ = user(this.auth);
  userState$ = authState(this.auth);

  currentUser = signal<Person | null | undefined>(undefined)

  async resgistrar(email: string, password: string) {
    await createUserWithEmailAndPassword(this.auth, email, password)
      .then(response =>
        updateProfile(response.user, { displayName: email })
      ).catch(e => {
        throw e;
      });
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logOut() {
    return await signOut(this.auth);
  }

  getUserLogged() {
    return this.userState$;
  }
}
