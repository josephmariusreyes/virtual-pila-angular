import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-quelist',
  templateUrl: './customer-quelist.component.html',
  styleUrl: './customer-quelist.component.scss',
  standalone:false
})
export class CustomerQuelistComponent {
  
  companyName$ = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.companyName$.set(this.route.snapshot.paramMap.get('companyName'));
  }

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
