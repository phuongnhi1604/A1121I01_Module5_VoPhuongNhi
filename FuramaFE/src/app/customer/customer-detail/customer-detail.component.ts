import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ICustomerType} from '../../model/icustomer-type';
import {ICustomer} from '../../model/icustomer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  detailForm: FormGroup;
  customerTypes: ICustomerType[] = [];
  customerDetail: ICustomer = {};
  id: number;
  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerTypes();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe((customer) => {
      this.detailForm = new FormGroup({
        customer_id: new FormControl(customer.customer_id),
        customer_code: new FormControl(customer.customer_code),
        customerType: new FormControl(customer.customerType),
        customer_name: new FormControl(customer.customer_name),
        customer_birthday: new FormControl(customer.customer_birthday),
        customer_gender: new FormControl(customer.customer_gender),
        customer_id_card: new FormControl(customer.customer_id_card),
        customer_phone: new FormControl(customer.customer_phone),
        customer_email: new FormControl(customer.customer_email),
        customer_address: new FormControl(customer.customer_address)
      });
    });
  }
  compareWith(c1: ICustomerType, c2: ICustomerType): boolean {
    return c1 && c2 ? c1.customer_type_id === c2.customer_type_id : c1 === c2;
  }
  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe((customerTypes) => {
      this.customerTypes = customerTypes;
    });
  }
  backToList() {
    this.router.navigateByUrl('customers/list');
  }
}
