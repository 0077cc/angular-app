import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Category } from '../models/catgory.model';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {
    readonly baseUrl: string = environment.api;
    private categories: Category[];

    constructor(private http: HttpClient) {}

    getCategories() {
        const fullUrl = `${this.baseUrl}/categories`;

        if (this.categories) {
            return of(this.categories);
        }

        return this.http.get(fullUrl).pipe(
            tap((response: Category[]) => {
               this.categories = response;
            })
        )
    }

    get categoryList() {
        return this.categories;
    }
}
