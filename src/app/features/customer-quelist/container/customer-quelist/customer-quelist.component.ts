import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Company {
  ID: string;
  UrlAlias: string;
  Name: string;
  Description: string;
  ContactNumber: string;
  Email: string;
  TransactionType: string[];
}

@Component({
  selector: 'app-customer-quelist',
  templateUrl: './customer-quelist.component.html',
  styleUrl: './customer-quelist.component.scss',
  standalone: false
})
export class CustomerQuelistComponent {
  companyName$ = signal<string | null>(null);
  companies: Company[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.companyName$.set(this.route.snapshot.paramMap.get('companyName'));
    this.http.get<Company[]>('/app-company.json').subscribe(data => {
      this.companies = data;
    });
  }

  onCompanySelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedAlias = select.value;
    if (selectedAlias) {
      this.router.navigate(['/customer-que', selectedAlias]);
    }
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
