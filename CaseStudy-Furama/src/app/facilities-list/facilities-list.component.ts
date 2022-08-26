import { Component, OnInit } from '@angular/core';
import {IFacility} from '../model/IFacility';
import {FacilityDAO} from '../../data/FacilityDAO';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.css']
})
export class FacilitiesListComponent implements OnInit {
  facilities: IFacility[] = FacilityDAO.getAllFacilities();
  constructor() { }

  ngOnInit(): void {
  }

}
