import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {CustomerDAO} from '../../data/CustomerDAO';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = CustomerDAO.getAllCustomers();
  constructor() { }

  ngOnInit(): void {
  }

}
