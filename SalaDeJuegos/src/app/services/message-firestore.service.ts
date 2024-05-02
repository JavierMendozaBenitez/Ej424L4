import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class MessageFirestoreService {

  private rutaDeFirestore = 'mensajes';
  private items$: Observable<Message[]>;
  private db = inject(AngularFireDatabase);


  constructor() {
    console.log('MessageFirestoreService');
    this.items$ = this.db.list(this.rutaDeFirestore).valueChanges() as Observable<Message[]>;
  }

  public getAll() {
    return this.items$;
  }

}
