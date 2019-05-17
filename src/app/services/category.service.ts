import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Category } from '../models/catgory.model';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {
    readonly baseUrl: string = environment.api;
    private categories: Array<Category>;

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Array<Category>> {
        const fullUrl = `${this.baseUrl}/categories`;

        return this.categories ? of(this.categories)
            : this.http.get(fullUrl)
                .pipe(tap((response: Array<Category>) => this.categories = response ));
    }

    get categoryList(): Array<Category> {
        return this.categories;
    }
}
