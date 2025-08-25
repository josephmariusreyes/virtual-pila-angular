import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-quelist',
  templateUrl: './customer-quelist.component.html',
  styleUrl: './customer-quelist.component.scss',
  standalone:false
})
export class CustomerQuelistComponent {

  completeService(): void {
    alert('Complete Service functionality will be implemented here');
  }

  editCustomer(customerId: number): void {
    alert(`Edit Customer ${customerId} functionality will be implemented here`);
  }

  removeCustomer(customerId: number): void {
    alert(`Remove Customer ${customerId} functionality will be implemented here`);
  }

}
