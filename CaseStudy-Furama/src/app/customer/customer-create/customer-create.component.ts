import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerCreateForm: FormGroup;
  customerTypes: Array<string> = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Member'];
  genders: Array<string> = ['Nam', 'Nữ', 'Khác'];
  constructor(private customerService: CustomerServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.customerCreateForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]),
      address: new FormControl('', [Validators.required])
    });
  }

  createCustomer() {
    this.customerService.createCustomer(this.customerCreateForm.value);
    this.router.navigateByUrl('customerList');
  }

  formReset() {
    this.customerCreateForm.reset();
  }
}
