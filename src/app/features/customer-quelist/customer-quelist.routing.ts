
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerQuelistComponent } from "./container/customer-quelist/customer-quelist.component";
import { AddCustomerToQueComponent } from "./container/add-customer-to-que/add-customer-to-que.component";
import { AddCustomerToQueGuard } from "src/app/guard/add-customer-to-que.guard";


export const routes: Routes = [
  { path: '', component: CustomerQuelistComponent},
  { path: 'add-customer', component: AddCustomerToQueComponent, canActivate: [AddCustomerToQueGuard] },
  { path: ':companyName', component: CustomerQuelistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerQuelistRoutingModule { }