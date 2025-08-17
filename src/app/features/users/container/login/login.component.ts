import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false],
    });
  }

  // submit handler: only show alert when form is valid
  login(): void {
    if (this.loginForm.valid) {
      alert('Login clicked');
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
