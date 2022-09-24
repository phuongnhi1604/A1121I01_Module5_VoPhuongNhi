import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../model/icustomer-type';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerCreateForm: FormGroup;
  customerTypes: ICustomerType[] = [];
  id: number;
  genders: Array<string> = ['Nam', 'Nữ', 'Khác'];
  constructor(private customerService: CustomerService,
              private router: Router, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerCreateForm = new FormGroup({
      customer_code: new FormControl('', [Validators.required, Validators.pattern('^KH[0-9]{4}$')]),
      customerType: new FormControl('', [Validators.required]),
      customer_name: new FormControl('', [Validators.required]),
      customer_birthday: new FormControl('', [Validators.required]),
      customer_gender: new FormControl('', [Validators.required]),
      customer_id_card: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
      customer_phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
      customer_email: new FormControl('', [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]),
      customer_address: new FormControl('', [Validators.required])
    });
    this.getAllCustomerTypes();
  }
  createCustomer() {
    const customer = this.customerCreateForm.value;
    this.customerService.createCustomer(customer).subscribe(() => {
      this.customerCreateForm.reset();
      alert('Tạo mới thành công');
      this.router.navigateByUrl('/customers/list');
    }, error => {
      console.log(error);
    });
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
