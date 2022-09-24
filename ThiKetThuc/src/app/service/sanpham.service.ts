import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ISanPham} from '../model/ISanPham';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ISanPham[]> {
    return this.http.get<ISanPham[]>(API_URL + '/sanpham');
  }

  create(sanpham): Observable<ISanPham> {
    return this.http.post<ISanPham>(API_URL + '/sanpham', sanpham);
  }

  findById(id: number): Observable<ISanPham> {
    return this.http.get<ISanPham>(`${API_URL}/sanpham/${id}`);
  }

  deleteById(id: number): Observable<ISanPham> {
    return this.http.delete<ISanPham>(`${API_URL}/sanpham/${id}`);
  }
}
