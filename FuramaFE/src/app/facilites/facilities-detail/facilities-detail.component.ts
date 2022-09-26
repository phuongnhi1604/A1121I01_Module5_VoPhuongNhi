import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IRentType} from '../../model/iRent-type';
import {IServiceType} from '../../model/iService-type';
import {IService} from '../../model/iservice';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';
import {ServiceTypeService} from '../../service/service-type.service';

@Component({
  selector: 'app-facilities-detail',
  templateUrl: './facilities-detail.component.html',
  styleUrls: ['./facilities-detail.component.css']
})
export class FacilitiesDetailComponent implements OnInit {
  detailForm: FormGroup;
  id: number;
  name: string;
  rentTypes: IRentType[] = [];
  typeServices: IServiceType[] = [];
  facility: IService = {};
  constructor(private facilityService: ServiceService, private activatedRoute: ActivatedRoute,
              private router: Router, private rentTypeService: RentTypeService,
              private serviceType: ServiceTypeService) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllRentTypes();
    this.getAllServiceTypes();
  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.detailForm = new FormGroup({
        service_name: new FormControl(facility.service_name),
        service_area: new FormControl(facility.service_area),
        service_cost: new FormControl(facility.service_cost),
        service_max_people: new FormControl(facility.service_max_people),
        rentType: new FormControl(facility.rentType.rent_type_name),
        serviceType: new FormControl(facility.serviceType.service_type_name),
        standard_room: new FormControl(facility.standard_room),
        description_other_convenience: new FormControl(facility.description_other_convenience),
        pool_area: new FormControl(facility.pool_area),
        number_of_floors: new FormControl(facility.number_of_floors),
        image: new FormControl(facility.image)
      });
      this.facility = facility;
    });
  }
  compareWith(c1: IServiceType, c2: IServiceType): boolean {
    return c1 && c2 ? c1.service_type_id === c2.service_type_id : c1 === c2;
  }
  getAllRentTypes() {
    this.rentTypeService.getAll().subscribe((rentTypes) => {
      this.rentTypes = rentTypes;
    });
  }

  getAllServiceTypes() {
    this.serviceType.getAll().subscribe((serviceTypes) => {
      this.typeServices = serviceTypes;
    });
  }
}
