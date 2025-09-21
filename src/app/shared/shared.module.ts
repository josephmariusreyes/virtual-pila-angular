import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CustomerSearchDialogComponent } from './components/customer-search-dialog/customer-search-dialog.component';

@NgModule({
  declarations: [
    CustomerSearchDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    CustomerSearchDialogComponent
  ]
})
export class SharedModule { }
