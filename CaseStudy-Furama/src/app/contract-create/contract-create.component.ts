import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../model/ICustomer';
import {CustomerServiceService} from '../service/customer-service.service';
import {FacilityServiceService} from '../service/facility-service.service';
import {IFacility} from '../model/IFacility';
import {ContractServiceService} from '../service/contract-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  formCreate: FormGroup;
  customers: ICustomer[] = this.customerService.getAllCustomers();
  facilities: IFacility[] = this.facilityService.getAllFacilities();
  constructor(private customerService: CustomerServiceService, private facilityService: FacilityServiceService,
              private contractService: ContractServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      start_day: new FormControl('', [Validators.required]),
      end_day: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      total: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      customer: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required])
    });
  }

  createContract() {
    this.contractService.addContract(this.formCreate.value);
    this.router.navigateByUrl('contractsList');
  }
}
