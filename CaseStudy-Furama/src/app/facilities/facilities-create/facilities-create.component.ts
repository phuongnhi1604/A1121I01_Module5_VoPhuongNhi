import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityServiceService} from '../../service/facility-service.service';
import {Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';
import {IRentType} from '../../model/IRentType';
import {ServiceTypeService} from '../../service/service-type.service';
import {IServiceType} from '../../model/IServiceType';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  formCreate: FormGroup;
  rentTypes: IRentType[] = [];
  serviceTypes: IServiceType[] = [];
  constructor(private facilityService: FacilityServiceService, private router: Router,
              private rentTypeService: RentTypeService,
              private serviceTypeService: ServiceTypeService) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
      area: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      cost: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      maxPeople: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      numberOfFloor: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      image: new FormControl('', [Validators.required])
    });
    this.getAllRentTypes();
    this.getAllServiceTypes();
  }

  createFacility() {
    const facility = this.formCreate.value;
    facility.rentType = {
      id: facility.rentType
    };
    this.facilityService.addFacility(facility).subscribe(() => {
      this.formCreate.reset();
      alert('Tạo mới thành công');
      this.router.navigateByUrl('facilities/list');
    }, error => {
      console.log(error);
    });
  }

  getAllRentTypes() {
    this.rentTypeService.getAll().subscribe((rentTypes) => {
      this.rentTypes = rentTypes;
    });
  }

  getAllServiceTypes() {
    this.serviceTypeService.getAll().subscribe((serviceTypes) => {
      this.serviceTypes = serviceTypes;
    });
  }
}
