import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'},
  {path:'customer',component:CustomerListComponent},
  {path:'add',component:CreateCustomerComponent},
  {path:'findByAge',component:SearchCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
