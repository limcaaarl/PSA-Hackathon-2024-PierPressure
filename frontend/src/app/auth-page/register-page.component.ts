import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './register-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class RegisterPageComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.register(this.email, this.password).subscribe({
        next: () => {
          console.log('Registration successful');
          this.errorMessage = null;
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Registration error:', error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please enter email and password';
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
