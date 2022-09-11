import { Injectable } from '@angular/core';
import {IFacility} from '../model/IFacility';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {

  constructor(private http: HttpClient) { }

  getAllFacilities(): Observable<IFacility[]> {
    return this.http.get<IFacility[]>(API_URL + '/facilities');
  }

  addFacility(facility): Observable<IFacility> {
    return this.http.post<IFacility>(API_URL + '/facilities', facility);
  }

  findByID(id: number): Observable<IFacility> {
    return this.http.get<IFacility>(`${API_URL}/facilities/${id}`);
  }

  updateById(id: number, facility: IFacility): Observable<IFacility> {
    return this.http.put<IFacility>(`${API_URL}/facilities/${id}`, facility);
  }

  deleteById(id: number): Observable<IFacility> {
    return this.http.delete<IFacility>(`${API_URL}/facilities/${id}`);
  }
}
