import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFacility} from '../model/IFacility';
import {IRentType} from '../model/IRentType';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IRentType[]> {
    return this.http.get<IRentType[]>(API_URL + '/rentTypes');
  }
}
