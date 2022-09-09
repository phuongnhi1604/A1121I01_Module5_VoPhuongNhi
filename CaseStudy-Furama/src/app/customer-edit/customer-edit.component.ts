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
        id: new FormControl(customer.id, [Validators.required, Validators.pattern('^\\d+$')]),
        code: new FormControl(customer.code, [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
        type: new FormControl(customer.type, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required]),
        birthday: new FormControl(customer.birthday, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]),
        address: new FormControl(customer.address, [Validators.required])
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
