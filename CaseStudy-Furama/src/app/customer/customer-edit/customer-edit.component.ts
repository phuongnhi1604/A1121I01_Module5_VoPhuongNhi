import {Component, Input, OnInit} from '@angular/core';
import {ICustomer} from '../../model/ICustomer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../model/ICustomerType';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  updateForm: FormGroup;
  customerTypes: ICustomerType[] = [];
  genders: Array<string> = ['Nam', 'Nữ', 'Khác'];
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
      this.updateForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required, Validators.pattern('^\\d+$')]),
        code: new FormControl(customer.code, [Validators.required, Validators.pattern('^KH[0-9]{4}$')]),
        type: new FormControl(customer.type.id, [Validators.required]),
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
    const customer = this.updateForm.value;
    this.customerService.updateById(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('customers/list');
    }, error => {
      console.log(error);
    });
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAll().subscribe((customerTypes) => {
      this.customerTypes = customerTypes;
    });
  }
}
