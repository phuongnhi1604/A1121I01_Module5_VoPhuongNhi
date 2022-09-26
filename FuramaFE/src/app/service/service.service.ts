import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IService} from '../model/iservice';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<IService[]> {
    return this.http.get<IService[]>(API_URL + '/api/services');
  }

  search(name: string, rentType: string, serviceType: string): Observable<IService[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<IService[]>(API_URL + '/api/services/search?name=' + name + '&rentType=' + rentType + '&serviceType=' + serviceType);
  }

  getAllServicePageable(index: number): Observable<any> {
    return this.http.get<any>(API_URL + '/api/services/list/?index=' + index);
  }
  createService(service): Observable<IService> {
    return this.http.post<IService>(API_URL + '/api/services/create', service);
  }

  findById(id: number): Observable<IService> {
    return this.http.get<IService>(`${API_URL}/api/services/${id}`);
  }

  updateById(id: number, service: IService): Observable<IService> {
    return this.http.put<IService>(`${API_URL}/api/services/update/${id}`, service);
  }

  deleteById(id: number): Observable<IService> {
    return this.http.delete<IService>(`${API_URL}/api/services/delete/${id}`);
  }
}
