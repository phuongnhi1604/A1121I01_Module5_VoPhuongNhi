import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { IRentType } from 'src/app/model/iRent-type';
import {IServiceType} from '../../model/iService-type';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';
import {ServiceTypeService} from '../../service/service-type.service';

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
  typeServices: IServiceType[] = [];
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
      this.editForm = new FormGroup({
        service_name: new FormControl(facility.service_name, [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
        service_area: new FormControl(facility.service_area, [Validators.required, Validators.pattern('^\\d+$')]),
        service_cost: new FormControl(facility.service_cost, [Validators.required, Validators.pattern('^\\d+$')]),
        service_max_people: new FormControl(facility.service_max_people, [Validators.required, Validators.pattern('^\\d+$')]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        serviceType: new FormControl(facility.serviceType, [Validators.required]),
        standard_room: new FormControl(facility.standard_room, [Validators.required]),
        description_other_convenience: new FormControl(facility.description_other_convenience, [Validators.required]),
        pool_area: new FormControl(facility.pool_area, [Validators.required, Validators.pattern('^\\d+$')]),
        number_of_floors: new FormControl(facility.number_of_floors, [Validators.required, Validators.pattern('^\\d+$')]),
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
