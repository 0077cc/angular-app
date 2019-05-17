import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    private baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = `${environment.api}/products`;
    }

    getProducts(): Observable<any> {
        return this.http.get(this.baseURL);
    }

    getProductById(id: number): Observable<any> {
        return this.http.get(`${this.baseURL}/${id}`);
    }

    createProduct(product: Product): Observable<any> {
        return this.http.post(this.baseURL, product);
    }

    updateProduct(id: number, product: Product): Observable<any> {
        return this.http.put(`${this.baseURL}/${id}`, product);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.baseURL}/${id}`);
    }
}
