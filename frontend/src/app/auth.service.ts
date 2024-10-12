import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, User } from '@angular/fire/auth';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseAuth = inject(Auth);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  constructor() {
    this.checkAuthState();
  }

  login(email: string, password: string): Observable<any> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password);
    return from(promise);
  }

  register(email: string, password: string): Observable<any> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password);
    return from(promise);
  }

  private checkAuthState(): void {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      if (user) {
        this.userSubject.next(user);
      } else {
        this.userSubject.next(null);
      }
    });
  }

  logout(): void {
    this.firebaseAuth.signOut();
    this.userSubject.next(null);
  }
}
