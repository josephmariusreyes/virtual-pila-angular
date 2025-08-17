import { NgModule } from "@angular/core";
import { CustomerQuelistComponent } from "./container/customer-quelist/customer-quelist/customer-quelist.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CustomerQuelistRoutingModule } from "./customer-quelist.routing";

@NgModule({
  declarations: [
    CustomerQuelistComponent
  ],
  imports: [
    CustomerQuelistRoutingModule,
    CommonModule,
    RouterModule
  ]
})
export class CustomerQuelistModule {}