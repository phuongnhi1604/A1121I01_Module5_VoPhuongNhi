import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/icustomer';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_URL + '/api/customers');
  }

  search(name: string, type: string): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_URL + '/api/customers/search?name=' + name + '&type=' + type);
  }

  getAllCustomerPageable(index: number): Observable<any> {
    return this.http.get<any>(API_URL + '/api/customers/list/?index=' + index);
  }
  createCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>(API_URL + '/api/customers/create', customer);
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${API_URL}/api/customers/${id}`);
  }

  updateById(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(`${API_URL}/api/customers/update/${id}`, customer);
  }

  deleteById(id: number): Observable<ICustomer> {
    return this.http.delete<ICustomer>(`${API_URL}/api/customers/delete/${id}`);
  }
}
