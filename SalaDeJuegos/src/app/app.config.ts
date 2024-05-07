import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), DatePipe,
  importProvidersFrom(
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule

  ), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "saladejuegosjaviermendoza", "appId": "1:1064678228262:web:4615e32dc803aee5c4c1e7", "storageBucket": "saladejuegosjaviermendoza.appspot.com", "apiKey": "AIzaSyC4Un1X9Wo8m5J3nrh0ncNJQeojyASRV3A", "authDomain": "saladejuegosjaviermendoza.firebaseapp.com", "messagingSenderId": "1064678228262" }))),
  importProvidersFrom(provideAuth(() => getAuth())),
  importProvidersFrom(provideFirestore(() => getFirestore())),
  importProvidersFrom(provideStorage(() => getStorage()))]

};



