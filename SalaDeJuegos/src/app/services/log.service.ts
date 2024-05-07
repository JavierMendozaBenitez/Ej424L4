
import { Injectable, inject } from '@angular/core';
import { CollectionReference, Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private db: Firestore = inject(Firestore)
  private infoColl: CollectionReference;

  constructor() {
    this.infoColl = collection(this.db, 'logs');
  }

  guardarInfo(email: string) {
    if (email) {
      let info = <Info>{
        email: email,
        date: new Date()

      }
      addDoc(this.infoColl, info)
        .then((resultado) => {
          console.log("Se subio a la base!!!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}




