import { Component, OnInit } from '@angular/core';
import {FacilityServiceService} from '../../service/facility-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {error} from 'protractor';
import {FormControl, FormGroup} from '@angular/forms';
import {IFacility} from '../../model/IFacility';

@Component({
  selector: 'app-facilities-delete',
  templateUrl: './facilities-delete.component.html',
  styleUrls: ['./facilities-delete.component.css']
})
export class FacilitiesDeleteComponent implements OnInit {
  id: number;
  facility: IFacility;
  constructor(private facilityService: FacilityServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
    });
  }

  ngOnInit(): void {
  }

  getFacility() {
    return this.facilityService.findByID(this.id).subscribe((data) => {
      this.facility = data;
    });
  }
  deleteFacility(id: number) {
    this.facilityService.deleteById(id).subscribe(() => {
      this.router.navigateByUrl('/facilities/list');
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
}
