import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { IRentType } from 'src/app/model/iRent-type';
import { IServiceType } from 'src/app/model/iService-type';
import {ServiceService} from '../../service/service.service';
import {Router} from '@angular/router';
import {RentTypeService} from '../../service/rent-type.service';
import {ServiceTypeService} from '../../service/service-type.service';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  formCreate: FormGroup;
  rentTypes: IRentType[] = [];
  serviceTypes: IServiceType[] = [];
  constructor(private facilityService: ServiceService, private router: Router,
              private rentTypeService: RentTypeService,
              private serviceTypeService: ServiceTypeService) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      service_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
      service_area: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      service_cost: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      service_max_people: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      standard_room: new FormControl('', [Validators.required]),
      description_other_convenience: new FormControl('', [Validators.required]),
      pool_area: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      number_of_floors: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      image: new FormControl('', [Validators.required])
    });
    this.getAllRentTypes();
    this.getAllServiceTypes();
  }

  createFacility() {
    const facility = this.formCreate.value;
    this.facilityService.createService(facility).subscribe(() => {
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
  backToList() {
    this.router.navigateByUrl('facilities/list');
  }
}
