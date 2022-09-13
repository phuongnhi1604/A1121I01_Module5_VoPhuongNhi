import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ICustomerType} from '../../model/ICustomerType';
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
  constructor(private customerService: CustomerServiceService,
              private router: Router, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerCreateForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^KH[0-9]{4}$')]),
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]),
      address: new FormControl('', [Validators.required])
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

  formReset() {
    this.customerCreateForm.reset();
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe((customerTypes) => {
      this.customerTypes = customerTypes;
    });
  }
}
