import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
    private baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = environment.api;
    }

    getProducts() {
        const fullUrl = `${this.baseURL}/products/`;
        return this.http.get(fullUrl);
    }

    getProductById(id: number) {
        const fullUrl = `${this.baseURL}/products/${id}`;

        return this.http.get(fullUrl);
    }

    createProduct(product: Product) {
        const fullUrl = `${this.baseURL}/products`;

        return this.http.post(fullUrl, product);
    }

    updateProduct(id: number, product: Product) {
        const fullUrl = `${this.baseURL}/products/${id}`;

        return this.http.put(fullUrl, product);
    }

    deleteProduct(id: number) {
        const fullUrl = `${this.baseURL}/products/${id}`;

        return this.http.delete(fullUrl);
    }
}