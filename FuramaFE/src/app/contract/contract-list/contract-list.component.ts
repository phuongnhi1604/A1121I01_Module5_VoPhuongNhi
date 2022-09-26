import { Component, OnInit } from '@angular/core';
import {IContract} from '../../model/iContract';
import {ICustomer} from '../../model/icustomer';
import {IService} from '../../model/iservice';
import {FormControl, FormGroup} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {CustomerService} from '../../service/customer.service';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: IContract[] = [];
  listContractNotPagination: IContract[] = [];
  indexPagination = 1;
  totalPagination: number;
  customers: ICustomer[] = [];
  facilities: IService[] = [];
  public searchContractForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private contractService: ContractService, private customerService: CustomerService, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.contractService.getAllContractPageable(0).subscribe(data => {
      this.contracts = data;
    });
    this.searchContractForm = new FormGroup({
      contract_start_date: new FormControl(''),
      contract_end_date: new FormControl(''),
      customer: new FormControl(''),
      service: new FormControl('')
    });
    this.contractService.getAllContracts().subscribe(data => {
      this.listContractNotPagination = data;
      // tslint:disable-next-line:triple-equals
      if ((this.listContractNotPagination.length % 5) != 0) {
        this.totalPagination = Math.round(this.listContractNotPagination.length / 5) + 1;
      }
    });
    this.getAllCustomers();
    this.getAllServices();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }
  getAllServices() {
    this.serviceService.getAllServices().subscribe(data => {
      this.facilities = data;
    });
  }
  searchContract() {
    this.contractService.search(this.searchContractForm.value.contract_start_date, this.searchContractForm.value.contract_end_date,
      this.searchContractForm.value.customer, this.searchContractForm.value.service).subscribe(data => {
        return this.contracts = data;
    });
  }

  // Phân trang
  findPagination() {
    this.contractService.getAllContractPageable((this.indexPagination * 5) - 5).subscribe((data) => {
      this.contracts = data;
    });
  }
  indexPaginationChange(value: number) {
    this.indexPagination = value;
  }
  firstPage() {
    this.indexPagination = 1;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.contractService.getAllContractPageable((this.indexPagination * 5) - 5).subscribe((data) => {
      this.contracts = data;
    });
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    // tslint:disable-next-line:triple-equals
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.contractService.getAllContractPageable((this.indexPagination * 5) - 5).subscribe((data) => {
        this.contracts = data;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.listContractNotPagination.length / 5;
    this.contractService.getAllContractPageable((this.indexPagination * 5) - 5).subscribe(data => {
      this.contracts = data;
    });
  }
}
