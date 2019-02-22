import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  age: number;
  customers: Customer[];

  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.age=0;
  }
  
  searchCustomers() {
    this.customerService.getCustomerByAge(this.age).subscribe(customers => this.customers = customers);
  }

  onSubmit() {
    this.searchCustomers();  
  }
}
