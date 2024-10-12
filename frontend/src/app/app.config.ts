import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from "@angular/common/http";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { firebaseConfig } from './firebase.config';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"pierpressure-5a9cf","appId":"1:333517113388:web:e17189bc92490b1618a989","storageBucket":"pierpressure-5a9cf.appspot.com","apiKey":"AIzaSyCw5q1BUiLo8S6BzO9hU5kAKyw05obooPs","authDomain":"pierpressure-5a9cf.firebaseapp.com","messagingSenderId":"333517113388"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
};
