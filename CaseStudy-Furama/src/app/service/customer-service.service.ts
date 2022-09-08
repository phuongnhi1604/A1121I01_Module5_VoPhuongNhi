import { Injectable } from '@angular/core';
import {CustomerDAO} from '../../data/CustomerDAO';
import {ICustomer} from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers: ICustomer[] = this.getAllCustomers();
  constructor() { }

  getAllCustomers() {
    return CustomerDAO.getAllCustomers();
  }

  createCustomer(customer: ICustomer) {
    CustomerDAO.customers.push(customer);
  }

  findById(id: number) {
    // tslint:disable-next-line:triple-equals
    return CustomerDAO.customers.find((cus) => cus.id == id);
  }

  updateById(id: number, customer: ICustomer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }
}
