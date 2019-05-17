import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/catgory.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    show: boolean;
    titles: Array<string>;
    categories: Array<Category>;

    @Input() products: Array<Product>;
    @Output() deleteProduct: EventEmitter<any> = new EventEmitter<any>();
    @Output() changeState: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private router: Router,
        private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.show = false;
        this.titles = ['id', 'nombre', 'categoria', 'precio', 'detalle', 'acciones'];
        this.categoryService.getCategories()
            .subscribe((response: Array<Category>) => {
                this.categories = response;
                this.show = !this.show;
            });
    }

    handleDelete(product: Product): void {
        this.deleteProduct.emit(product);
    }

    handleState(product: Product): void {
        this.changeState.emit(product);
    }

    handleUpdate(id: number): void {
        this.router.navigate(['productos', id]);
    }

    getCategoryName(id: string): string {
        return this.categories
            .find(item => item.id === id).name;
    }
}
