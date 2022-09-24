import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../model/icustomer';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ICustomerType} from '../../model/icustomer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  listCustomerNotPagination: ICustomer[] = [];
  customerDelete: ICustomer = {};
  indexPagination = 1;
  totalPagination: number;
  customerTypes: ICustomerType[] = [];
  public searchCustomerForm: FormGroup;
  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    // this.getAll();
    // this.searchCustomer(0);
    this.customerService.getAllCustomerPageable(0).subscribe((data) => {
      this.customers = data;
    });
    this.searchCustomerForm = new FormGroup({
      customer_name: new FormControl(''),
      customerType: new FormControl('')
    });
    this.customerService.getAllCustomers().subscribe(data => {
      this.listCustomerNotPagination = data;
      // tslint:disable-next-line:triple-equals
      if ((this.listCustomerNotPagination.length % 5) != 0) {
        this.totalPagination = (Math.round(this.listCustomerNotPagination.length / 5) + 1);
      }
    });
    this.getAllCustomerTypes();
  }
  getList(index: number) {
    this.customerService.getAllCustomerPageable(index).subscribe((customers) => {
      this.customers = customers;
    });
  }
  searchCustomer() {
    // tslint:disable-next-line:max-line-length
   this.customerService.search(this.searchCustomerForm.value.customer_name, this.searchCustomerForm.value.customerType).subscribe((data) => {
     return this.customers = data;
   });
  }
  getAll() {
    return this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  findPagination() {
    this.customerService.getAllCustomerPageable((this.indexPagination * 5) - 5).subscribe((data: ICustomer[]) => {
      this.customers = data;
    });
  }
  indexPaginationChange(value: number) {
    this.indexPagination = value;
  }
  firstPage() {
    this.indexPagination = 1;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.customerService.getAllCustomerPageable((this.indexPagination * 5) - 5).subscribe((data: ICustomer[]) => {
      this.customers = data;
    });
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    // tslint:disable-next-line:triple-equals
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.customerService.getAllCustomerPageable((this.indexPagination * 5) - 5).subscribe((data: ICustomer[]) => {
        this.customers = data;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.listCustomerNotPagination.length / 5;
    this.customerService.getAllCustomerPageable((this.indexPagination * 5) - 5).subscribe(data => {
      this.customers = data;
    });
  }
  getCustomerDelete(customer: ICustomer) {
    this.customerDelete = customer;
  }
  deleteCustomer(id: number) {
    this.customerService.deleteById(id).subscribe(() => {
      // tslint:disable-next-line:no-shadowed-variable
    }, (error) => {
      console.log(error);
    }, () => {
      alert('Xóa thành công');
      this.ngOnInit();
    });
  }
  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe((customerTypes) => {
      this.customerTypes = customerTypes;
    });
  }
}
