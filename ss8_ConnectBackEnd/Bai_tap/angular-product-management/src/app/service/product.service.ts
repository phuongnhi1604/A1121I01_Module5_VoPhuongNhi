import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {CategoryService} from './category.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @ts-ignore
  private API_URL = ' http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }
  updateById(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${id}`, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API_URL}/${id}`);
  }
}
