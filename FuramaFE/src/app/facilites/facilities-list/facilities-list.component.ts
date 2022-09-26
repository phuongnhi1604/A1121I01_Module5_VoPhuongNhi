import { Component, OnInit } from '@angular/core';
import {IService} from '../../model/iservice';
import {IRentType} from '../../model/iRent-type';
import {IServiceType} from '../../model/iService-type';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service/service.service';
import {RentTypeService} from '../../service/rent-type.service';
import {ServiceTypeService} from '../../service/service-type.service';
import {ICustomer} from '../../model/icustomer';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilities: IService[] = [];
  listFacilityNotPagination: IService[] = [];
  facilityDelete: IService = {};
  indexPagination = 1;
  totalPagination: number;
  rentTypes: IRentType[] = [];
  serviceTypes: IServiceType[] = [];
  public searchFacilitiesForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private serviceService: ServiceService, private rentTypeService: RentTypeService, private serviceTypeService: ServiceTypeService) { }

  ngOnInit(): void {
    this.serviceService.getAllServicePageable(0).subscribe((data) => {
      this.facilities = data;
    });
    this.searchFacilitiesForm = new FormGroup({
      service_name: new FormControl(''),
      rentType: new FormControl(''),
      serviceType: new FormControl('')
    });
    this.serviceService.getAllServices().subscribe(data => {
      this.listFacilityNotPagination = data;
      // tslint:disable-next-line:triple-equals
      if ((this.listFacilityNotPagination.length % 9) != 0) {
        this.totalPagination = Math.round(this.listFacilityNotPagination.length / 9) + 1;
      }
    });
    this.getAllRentTypes();
    this.getAllServiceTypes();
  }

  getAllRentTypes() {
    this.rentTypeService.getAll().subscribe(data => {
      this.rentTypes = data;
    });
  }
  getAllServiceTypes() {
    this.serviceTypeService.getAll().subscribe(data => {
      this.serviceTypes = data;
    });
  }

  searchFacility() {
    // tslint:disable-next-line:max-line-length
    this.serviceService.search(this.searchFacilitiesForm.value.service_name, this.searchFacilitiesForm.value.rentType, this.searchFacilitiesForm.value.serviceType).subscribe(data => {
      return this.facilities = data;
    });
  }

  // Phân trang
  findPagination() {
    this.serviceService.getAllServicePageable((this.indexPagination * 9) - 9).subscribe((data: IService[]) => {
      this.facilities = data;
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
    this.serviceService.getAllServicePageable((this.indexPagination * 9) - 9).subscribe((data: IService[]) => {
      this.facilities = data;
    });
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    // tslint:disable-next-line:triple-equals
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.serviceService.getAllServicePageable((this.indexPagination * 9) - 9).subscribe((data: IService[]) => {
        this.facilities = data;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.listFacilityNotPagination.length / 9;
    this.serviceService.getAllServicePageable((this.indexPagination * 9) - 9).subscribe(data => {
      this.facilities = data;
    });
  }
  getFacilityDelete(service: IService) {
    this.facilityDelete = service;
  }
  deleteFacility(id: number) {
    this.serviceService.deleteById(id).subscribe(() => {
    }, (error) => {
      console.log(error);
    }, () => {
      alert('Xóa thành công');
      this.ngOnInit();
    });
  }
}
