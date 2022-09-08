import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {CustomerServiceService} from '../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  updateForm: FormGroup;
  customerTypes: Array<string> = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Member'];
  genders: Array<string> = ['Nam', 'Nữ', 'Khác'];
  id: number;
  constructor(private customerService: CustomerServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      // tslint:disable-next-line:radix
      this.id = parseInt(param.get('id'));
      const customer = this.customerService.findById(this.id);
      this.updateForm = new FormGroup({
        id: new FormControl(customer.id),
        code: new FormControl(customer.code),
        type: new FormControl(customer.type),
        name: new FormControl(customer.name),
        birthday: new FormControl(customer.birthday),
        gender: new FormControl(customer.gender),
        id_card: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address)
      });
    });
  }

  updateCustomer(id: number) {
    // @ts-ignore
    const customer = this.updateForm.value;
    this.customerService.updateById(id, customer);
    this.router.navigateByUrl('customerList');
  }
}
