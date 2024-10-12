import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseAuth = inject(Auth);

  login(email: string, password: string): Observable<any> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password);
    return from(promise);
  }

  register(email: string, password: string): Observable<any> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password);
    return from(promise);
  }
}
