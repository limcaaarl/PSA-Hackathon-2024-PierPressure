import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from "@angular/common/http";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5q1BUiLo8S6BzO9hU5kAKyw05obooPs",
  authDomain: "pierpressure-5a9cf.firebaseapp.com",
  projectId: "pierpressure-5a9cf",
  storageBucket: "pierpressure-5a9cf.appspot.com",
  messagingSenderId: "333517113388",
  appId: "1:333517113388:web:e17189bc92490b1618a989"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
