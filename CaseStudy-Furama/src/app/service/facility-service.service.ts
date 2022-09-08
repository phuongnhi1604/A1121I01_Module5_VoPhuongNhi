import { Injectable } from '@angular/core';
import {FacilityDAO} from '../../data/FacilityDAO';
import {IFacility} from '../model/IFacility';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  facilities: IFacility[] = this.getAllFacilities();
  constructor() { }

  getAllFacilities() {
    return FacilityDAO.getAllFacilities();
  }

  addFacility(facility: IFacility) {
    FacilityDAO.facilities.push(facility);
  }

  findByID(id: number) {
    // tslint:disable-next-line:triple-equals
    return FacilityDAO.facilities.find((faci) => faci.id == id);
  }

  updateById(id: number, facility: IFacility) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.facilities.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.facilities[i].id == id) {
        this.facilities[i] = facility;
      }
    }
  }
}
