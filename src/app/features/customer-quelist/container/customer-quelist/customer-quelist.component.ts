import { Component, signal, OnInit } from '@angular/core';
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

interface Customer {
  ID: string;
  CompanyID: string;
  FullName: string;
  ContactNumber: string;
  TypeOfTransaction: string;
  CustomerStatus: 'Waiting' | 'Serving' | 'Completed';
  TransactionType: string[];
}

@Component({
  selector: 'app-customer-quelist',
  templateUrl: './customer-quelist.component.html',
  styleUrl: './customer-quelist.component.scss',
  standalone: false
})
export class CustomerQuelistComponent implements OnInit {
  companyName$ = signal<string | null>(null);
  companies: Company[] = [];
  customers: Customer[] = [];
  searchPhoneNumber: string = '';
  
  // Collapsible state
  servingCollapsed = signal<boolean>(false);
  waitingCollapsed = signal<boolean>(false);

  // Computed properties for filtered customers
  get servingCustomers(): Customer[] {
    return this.customers.filter(customer => customer.CustomerStatus === 'Serving');
  }

  get waitingCustomers(): Customer[] {
    return this.customers.filter(customer => customer.CustomerStatus === 'Waiting');
  }

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
    this.http.get<Customer[]>('/app-customer-que.json').subscribe(data => {
      this.customers = data;
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

  startTransaction(customerId: string): void {
    alert(`Edit Customer ${customerId} functionality will be implemented here`);
  }

  removeFromQue(customerId: string): void {
    alert(`Remove Customer ${customerId} from queue functionality will be implemented here`);
  }

  searchByPhone(): void {
    if (this.searchPhoneNumber && this.searchPhoneNumber.length >= 10) {
      alert(`Searching for customer with phone number: ${this.searchPhoneNumber}`);
      // TODO: Implement actual phone number search functionality
    }
  }

  toggleServingSection(): void {
    console.log('toggleServingSection called, current state:', this.servingCollapsed());
    this.servingCollapsed.set(!this.servingCollapsed());
    console.log('new state:', this.servingCollapsed());
  }

  toggleWaitingSection(): void {
    console.log('toggleWaitingSection called, current state:', this.waitingCollapsed());
    this.waitingCollapsed.set(!this.waitingCollapsed());
    console.log('new state:', this.waitingCollapsed());
  }
}
