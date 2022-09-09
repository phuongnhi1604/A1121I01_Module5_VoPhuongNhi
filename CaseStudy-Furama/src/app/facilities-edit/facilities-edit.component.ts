import {Component, Input, OnInit} from '@angular/core';
import {IFacility} from '../model/IFacility';
import {FacilityServiceService} from '../service/facility-service.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractServiceService} from '../service/contract-service.service';

@Component({
  selector: 'app-facilities-edit',
  templateUrl: './facilities-edit.component.html',
  styleUrls: ['./facilities-edit.component.css']
})
export class FacilitiesEditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  rentTypes: Array<string> = ['Ngày', 'Tháng', 'Năm', 'Giờ'];
  typeServices: Array<string> = ['Villa', 'House', 'Room'];
  constructor(private facilityService: FacilityServiceService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // tslint:disable-next-line:radix
      this.id = parseInt(param.get('id'));
      const facility = this.facilityService.findByID(this.id);
      this.editForm = new FormGroup({
        id: new FormControl(facility.id, [Validators.required, Validators.pattern('^\\d+$')]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern('[a-zA-Z\\s]{1,100}')]),
        area: new FormControl(facility.area, [Validators.required, Validators.pattern('^\\d+$')]),
        cost: new FormControl(facility.cost, [Validators.required, Validators.pattern('^\\d+$')]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.pattern('^\\d+$')]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
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
    // @ts-ignore
    const contract = this.editForm.value;
    this.facilityService.updateById(id, contract);
    this.router.navigateByUrl('facilitiesList');
  }
}
