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
        id: new FormControl(facility.id),
        name: new FormControl(facility.name),
        area: new FormControl(facility.area),
        cost: new FormControl(facility.cost),
        max_people: new FormControl(facility.maxPeople),
        rent_type: new FormControl(facility.rentType),
        service_type: new FormControl(facility.serviceType),
        standard: new FormControl(facility.standardRoom),
        description: new FormControl(facility.description),
        pool_area: new FormControl(facility.poolArea),
        floors: new FormControl(facility.numberOfFloor),
        image: new FormControl(facility.image)
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
