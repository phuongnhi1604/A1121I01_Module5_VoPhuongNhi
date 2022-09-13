import {Component, Input, OnInit} from '@angular/core';
import {IFacility} from '../../model/IFacility';
import {FacilityServiceService} from '../../service/facility-service.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractServiceService} from '../../service/contract-service.service';
import {RentTypeService} from '../../service/rent-type.service';
import {IRentType} from '../../model/IRentType';
import {ServiceTypeService} from '../../service/service-type.service';
import {ICustomerType} from '../../model/ICustomerType';
import {IServiceType} from '../../model/IServiceType';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  name: string;
  rentTypes: IRentType[] = [];
  typeServices: IRentType[] = [];
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
      this.editForm = new FormGroup({
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
        area: new FormControl(facility.area, [Validators.required, Validators.pattern('^\\d+$')]),
        cost: new FormControl(facility.cost, [Validators.required, Validators.pattern('^\\d+$')]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern('^\\d+$')]),
        rentType: new FormControl(facility.rentType.id, [Validators.required]),
        serviceType: new FormControl(facility.serviceType, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        description: new FormControl(facility.description, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern('^\\d+$')]),
        numberOfFloor: new FormControl(facility.numberOfFloor, [Validators.required, Validators.pattern('^\\d+$')]),
        image: new FormControl(facility.image, [Validators.required])
      });
    });
  }
  updateFacility(id: number) {
    const facility = this.editForm.value;
    facility.rentType = {
      id: facility.rentType
    };
    this.facilityService.updateById(id, facility).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('facilities/list');
    }, error => {
      console.log(error);
    });
  }
  compareWith(c1: IServiceType, c2: IServiceType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  resetForm() {
    this.editForm.reset();
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
