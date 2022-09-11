import { Injectable } from '@angular/core';
import {IContract} from '../model/IContract';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor(private http: HttpClient) { }

  getAllContracts(): Observable<IContract[]> {
    return this.http.get<IContract[]>(API_URL + '/contracts');
  }

  addContract(contract): Observable<IContract> {
    return this.http.post<IContract>(API_URL + '/contracts', contract);
  }
}
