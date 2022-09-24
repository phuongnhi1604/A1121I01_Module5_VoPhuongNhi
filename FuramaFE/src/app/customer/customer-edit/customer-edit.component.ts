import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../model/icustomer-type';
import {ICustomer} from '../../model/icustomer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
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
  customerEdit: ICustomer = {};
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
      this.updateForm = new FormGroup({
        customer_code: new FormControl(customer.customer_code, [Validators.required, Validators.pattern('^KH[0-9]{4}$')]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
        customer_name: new FormControl(customer.customer_name, [Validators.required]),
        customer_birthday: new FormControl(customer.customer_birthday, [Validators.required]),
        customer_gender: new FormControl(customer.customer_gender, [Validators.required]),
        customer_id_card: new FormControl(customer.customer_id_card, [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
        customer_phone: new FormControl(customer.customer_phone, [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
        // tslint:disable-next-line:max-line-length
        customer_email: new FormControl(customer.customer_email, [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]),
        customer_address: new FormControl(customer.customer_address, [Validators.required])
      });
    });
  }

  compareWith(c1: ICustomerType, c2: ICustomerType): boolean {
    return c1 && c2 ? c1.customer_type_id === c2.customer_type_id : c1 === c2;
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

  backToList() {
    this.router.navigateByUrl('customers/list');
  }
}
