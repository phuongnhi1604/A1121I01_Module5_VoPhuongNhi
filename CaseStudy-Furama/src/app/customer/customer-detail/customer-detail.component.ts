import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../model/ICustomerType';
import {ICustomer} from '../../model/ICustomer';
import {CustomerServiceService} from '../../service/customer-service.service';
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
  genders: Array<string> = ['Nam', 'Nữ', 'Khác'];
  customerDetail: ICustomer = {};
  id: number;
  constructor(private customerService: CustomerServiceService, private activatedRoute: ActivatedRoute, private router: Router,
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
        id: new FormControl(customer.id),
        code: new FormControl(customer.code),
        type: new FormControl(customer.type),
        name: new FormControl(customer.name),
        birthday: new FormControl(customer.birthday),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address)
      });
    });
  }
  compareWith(c1: ICustomerType, c2: ICustomerType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe((customerTypes) => {
      this.customerTypes = customerTypes;
    });
  }
}
