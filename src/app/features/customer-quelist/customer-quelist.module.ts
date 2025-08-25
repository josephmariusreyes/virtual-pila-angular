import { NgModule } from "@angular/core";
import { CustomerQuelistComponent } from "./container/customer-quelist/customer-quelist.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CustomerQuelistRoutingModule } from "./customer-quelist.routing";
import { AddCustomerToQueComponent } from "./container/add-customer-to-que/add-customer-to-que.component";

@NgModule({
  declarations: [
    CustomerQuelistComponent,
    AddCustomerToQueComponent
  ],
  imports: [
    CustomerQuelistRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CustomerQuelistModule {}