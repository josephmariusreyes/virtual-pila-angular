import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]], // Remove email validator since it's actually username
      password: ['', [Validators.required]],
      remember: [false],
    });

    // Clear login error when user starts typing
    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginError) {
        this.loginError = '';
      }
    });
  }

  // submit handler: authenticate user with UserService
  login(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginError = '';
      
      const formValues = this.loginForm.value;
      // The form field is named 'email' but we're using it for username
      const username = formValues.email;
      const password = formValues.password;
      
      this.userService.login(username, password).subscribe({
        next: (success) => {
          this.isLoading = false;
          if (success) {
            // Navigate to dashboard or main app route after successful login
            this.router.navigate(['/customer-que']);
          } else {
            this.loginError = 'Invalid username or password. Please try again.';
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.loginError = 'An error occurred during login. Please try again.';
          console.error('Login error:', error);
        }
      });
    } else {
      // ensure validation messages appear (no business logic added)
      this.loginForm.markAllAsTouched();
    }
  }

  // convenience getter for template controls
  get loginFormControls() {
    return this.loginForm.controls;
  }
}
