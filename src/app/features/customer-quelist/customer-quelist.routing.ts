
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerQuelistComponent } from "./container/customer-quelist/customer-quelist/customer-quelist.component";


export const routes: Routes = [
  { path: '', component: CustomerQuelistComponent },
  { path: 'customer-quelist', component: CustomerQuelistComponent },
  { path: 'customer-quelist/:companyName', component: CustomerQuelistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerQuelistRoutingModule { }