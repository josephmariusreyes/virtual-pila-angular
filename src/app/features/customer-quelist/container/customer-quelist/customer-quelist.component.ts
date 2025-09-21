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

interface CustomerSearchResult {
  ID: string;
  FullName: string;
  ContactNumber: string;
  TypeOfTransaction: string;
  QueuePosition: number;
  CustomerStatus: 'Waiting' | 'Serving' | 'Completed';
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
  
  // Dialog properties
  showSearchDialog: boolean = false;
  searchResult: CustomerSearchResult | null = null;
  
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
      // Find customer by phone number
      const foundCustomer = this.customers.find(customer => 
        customer.ContactNumber === this.searchPhoneNumber
      );
      
      if (foundCustomer) {
        // Calculate queue position
        let queuePosition = 1;
        
        if (foundCustomer.CustomerStatus === 'Waiting') {
          // Find position in waiting queue
          const waitingCustomers = this.customers.filter(c => c.CustomerStatus === 'Waiting');
          queuePosition = waitingCustomers.findIndex(c => c.ID === foundCustomer.ID) + 1;
        } else if (foundCustomer.CustomerStatus === 'Serving') {
          // Find position in serving queue
          const servingCustomers = this.customers.filter(c => c.CustomerStatus === 'Serving');
          queuePosition = servingCustomers.findIndex(c => c.ID === foundCustomer.ID) + 1;
        }
        
        this.searchResult = {
          ID: foundCustomer.ID,
          FullName: foundCustomer.FullName,
          ContactNumber: foundCustomer.ContactNumber,
          TypeOfTransaction: foundCustomer.TypeOfTransaction,
          QueuePosition: queuePosition,
          CustomerStatus: foundCustomer.CustomerStatus
        };
      } else {
        this.searchResult = null;
      }
      
      this.showSearchDialog = true;
    }
  }

  onSearchDialogClose(): void {
    this.showSearchDialog = false;
    this.searchResult = null;
    this.searchPhoneNumber = '';
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
