import { Injectable } from '@angular/core';
import {ICustomer} from '../model/ICustomer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_URL + '/api/customers');
  }
  // searchByName(name: string): Observable<ICustomer[]> {
  //   return this.http.get<ICustomer[]>(`${API_URL}/customers/?filter[where][name]=${name}`);
  // }
  createCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>(API_URL + '/api/customers/create', customer);
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${API_URL}/customers/${id}`);
  }

  updateById(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(`${API_URL}/customers/${id}`, customer);
  }

  deleteById(id: number): Observable<ICustomer> {
    return this.http.delete<ICustomer>(`${API_URL}/customers/${id}`);
  }
}
