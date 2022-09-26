import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ICustomer } from 'src/app/model/icustomer';
import {IService} from '../../model/iservice';
import {CustomerService} from '../../service/customer.service';
import {ServiceService} from '../../service/service.service';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  formCreate: FormGroup;
  customers: ICustomer[];
  facilities: IService[];
  id: number;
  constructor(private customerService: CustomerService, private facilityService: ServiceService,
              private contractService: ContractService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      contract_start_date: new FormControl('', [Validators.required]),
      contract_end_date: new FormControl('', [Validators.required]),
      contract_deposit: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      contract_total_money: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      customer: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required])
    });
    this.getAllFacilities();
    this.getAllCustomers();
  }

  createContract() {
    const contract = this.formCreate.value;
    this.contractService.createContract(contract).subscribe(() => {
      this.formCreate.reset();
      alert('Tạo mới thành công');
      this.router.navigateByUrl('/contracts/list');
    }, error => {
      console.log(error);
    });
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  getAllFacilities() {
    this.facilityService.getAllServices().subscribe((facilities) => {
      this.facilities = facilities;
    });
  }
  backToList() {
    this.router.navigateByUrl('/contracts/list');
  }
}
