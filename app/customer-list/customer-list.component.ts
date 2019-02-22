import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService:CustomerService) { 

  }

  customers: Observable<Customer[]>;

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): any {
    this.customers = this.customerService.getCustomerList();
  }

  deleteCustomers() {
    this.customerService.deleteAll().subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log('Error'+error))
  }

}
