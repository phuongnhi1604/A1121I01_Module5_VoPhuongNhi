import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IRentType} from '../../model/IRentType';
import {FacilityServiceService} from '../../service/facility-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';
import {ServiceTypeService} from '../../service/service-type.service';
import {IServiceType} from '../../model/IServiceType';
import {IFacility} from '../../model/IFacility';

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
  typeServices: IRentType[] = [];
  facility: IFacility = {};
  constructor(private facilityService: FacilityServiceService, private activatedRoute: ActivatedRoute,
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
    return this.facilityService.findByID(id).subscribe(facility => {
      this.detailForm = new FormGroup({
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        maxPeople: new FormControl(facility.maxPeople),
        rentType: new FormControl(facility.rentType.id),
        serviceType: new FormControl(facility.serviceType),
        standardRoom: new FormControl(facility.standardRoom),
        description: new FormControl(facility.description),
        poolArea: new FormControl(facility.poolArea),
        numberOfFloor: new FormControl(facility.numberOfFloor),
        image: new FormControl(facility.image)
      });
      this.facility = facility;
    });
  }
  compareWith(c1: IServiceType, c2: IServiceType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
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
