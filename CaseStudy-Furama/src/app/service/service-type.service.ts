import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRentType} from '../model/IRentType';
import {IServiceType} from '../model/IServiceType';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IServiceType[]> {
    return this.http.get<IServiceType[]>(API_URL + '/typeServices');
  }
}
