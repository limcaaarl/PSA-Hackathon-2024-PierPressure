import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: () => {
          console.log('Login successful');
          this.errorMessage = null;
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      });
    } else {
      this.errorMessage = 'Please enter email and password';
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
