import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISanPham} from '../model/ISanPham';
import {ILoHang} from '../model/ILoHang';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class LohangService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ILoHang[]> {
    return this.http.get<ILoHang[]>(API_URL + '/lohang');
  }

  create(lohang): Observable<ILoHang> {
    return this.http.post<ILoHang>(API_URL + '/lohang', lohang);
  }

  findById(id: number): Observable<ILoHang> {
    return this.http.get<ILoHang>(`${API_URL}/lohang/${id}`);
  }
  deleteById(id: number): Observable<ILoHang> {
    return this.http.delete<ILoHang>(`${API_URL}/lohang/${id}`);
  }
}
