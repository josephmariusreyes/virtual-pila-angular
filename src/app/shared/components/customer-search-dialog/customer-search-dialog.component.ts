import { Component, Input, Output, EventEmitter } from '@angular/core';

interface CustomerSearchResult {
  ID: string;
  FullName: string;
  ContactNumber: string;
  TypeOfTransaction: string;
  QueuePosition: number;
  CustomerStatus: 'Waiting' | 'Serving' | 'Completed';
}

@Component({
  selector: 'app-customer-search-dialog',
  templateUrl: './customer-search-dialog.component.html',
  styleUrl: './customer-search-dialog.component.scss',
  standalone: false
})
export class CustomerSearchDialogComponent {
  @Input() visible: boolean = false;
  @Input() customer: CustomerSearchResult | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<void>();

  onHide(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.close.emit();
  }
}
