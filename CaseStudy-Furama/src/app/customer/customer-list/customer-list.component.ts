import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../model/ICustomer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  customerDelete: ICustomer = {};
  customersSearch: ICustomer[] = [];
  p = 1;
  term: string;
  constructor(private customerService: CustomerServiceService, private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
    //   this.name = param.get('name');
    //   this.search(this.name);
    // });
  }

  ngOnInit(): void {
      this.getAll();
  }

  getAll() {
    return this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }
  // search(name: string) {
  //   return this.customerService.searchByName(name).subscribe((data) => {
  //     this.customersSearch = data;
  //   });
  // }
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
}
