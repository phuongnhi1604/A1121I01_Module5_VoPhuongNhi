import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IService} from '../model/iservice';
import {IContract} from '../model/iContract';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getAllContracts(): Observable<IContract[]> {
    return this.http.get<IContract[]>(API_URL + '/api/contracts');
  }

  search(startDay: string, endDay: string, customer: string, service: string): Observable<IContract[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<IContract[]>(API_URL + '/api/contracts/search?startDay=' + startDay + '&endDay=' + endDay + '&customer=' + customer + '&service=' + service);
  }

  getAllContractPageable(index: number): Observable<any> {
    return this.http.get<any>(API_URL + '/api/contracts/list/?index=' + index);
  }
  createContract(contract): Observable<IContract> {
    return this.http.post<IContract>(API_URL + '/api/contracts/create', contract);
  }
}
