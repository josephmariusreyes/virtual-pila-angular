import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: false
})
export class RegisterComponent {
  registerForm = {
    fullname: '',
    cellphone: '',
    transactionType: ''
  };

  onSubmit() {
    alert('Form submitted with values:\n' + 
          'Full Name: ' + this.registerForm.fullname + '\n' +
          'Cellphone: ' + this.registerForm.cellphone + '\n' +
          'Transaction Type: ' + this.registerForm.transactionType);
  }
}
