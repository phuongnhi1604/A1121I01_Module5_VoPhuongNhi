import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {CustomerDAO} from '../../data/CustomerDAO';
import {CustomerServiceService} from '../service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  p = 1;
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomers();
  }

}
