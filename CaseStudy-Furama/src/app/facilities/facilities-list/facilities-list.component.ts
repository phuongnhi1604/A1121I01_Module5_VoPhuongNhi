import { Component, OnInit } from '@angular/core';
import {IFacility} from '../../model/IFacility';
import {FacilityServiceService} from '../../service/facility-service.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  p = 1;
  facilities: IFacility[] = [];
  constructor(private facilityService: FacilityServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAllFacilities().subscribe(facilities => {
      this.facilities = facilities;
    });
  }
}
