import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

   customer :Customer = new Customer();
   submitted: boolean = false;

   newCustomer(): void {
    this.submitted=false;
    this.customer = new Customer();
   }

   saveCustomer(): void {
     this.customerService.createCustomer(this.customer).subscribe(
       data => console.log(data), 
       error => console.log(error));
       this.customer= new Customer;
   }

   onSubmit() {
    this.submitted=true;
    this.saveCustomer()   
  }

}
