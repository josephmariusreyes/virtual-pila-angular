import { Component } from '@angular/core';

@Component({
  selector: 'app-add-customer-to-que',
  templateUrl: './add-customer-to-que.component.html',
  styleUrl: './add-customer-to-que.component.scss',
  standalone: false
})
export class AddCustomerToQueComponent {
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
