import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../model/ICustomer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {FacilityServiceService} from '../../service/facility-service.service';
import {IFacility} from '../../model/IFacility';
import {ContractServiceService} from '../../service/contract-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  formCreate: FormGroup;
  customers: ICustomer[];
  facilities: IFacility[];
  id: number;
  constructor(private customerService: CustomerServiceService, private facilityService: FacilityServiceService,
              private contractService: ContractServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      startDay: new FormControl('', [Validators.required]),
      endDay: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      total: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required])
    });
    this.getAllFacilities();
    this.getAllCustomers();
  }

  createContract() {
    const contract = this.formCreate.value;
    this.contractService.addContract(contract).subscribe(() => {
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
    this.facilityService.getAllFacilities().subscribe((facilities) => {
      this.facilities = facilities;
    });
  }
}
