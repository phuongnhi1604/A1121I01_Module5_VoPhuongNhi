import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityServiceService} from '../service/facility-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facilities-create',
  templateUrl: './facilities-create.component.html',
  styleUrls: ['./facilities-create.component.css']
})
export class FacilitiesCreateComponent implements OnInit {
  formCreate: FormGroup;
  rentTypes: Array<string> = ['Ngày', 'Tháng', 'Năm'];
  serviceTypes: Array<string> = ['Villa', 'House', 'Room'];
  constructor(private facilityService: FacilityServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
      area: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      cost: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      max_people: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      rent_type: new FormControl('', [Validators.required]),
      service_type: new FormControl('', [Validators.required]),
      standard: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      pool_area: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      floors: new FormControl('', [Validators.required, Validators.pattern('^\\d+$')]),
      image: new FormControl('', [Validators.required])
    });
  }

  createFacility() {
    this.facilityService.addFacility(this.formCreate.value);
    this.router.navigateByUrl('');
  }
}
