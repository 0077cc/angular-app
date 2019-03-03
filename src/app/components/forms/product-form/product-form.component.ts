import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from '../../../services/category.service';
import { Category } from 'src/app/models/catgory.model';
import { State } from '../../../app.enums';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html' 
})
export class ProductFormComponent implements OnInit {
    categories: Category[];

    @Input() product: Product;

    @Output() handleSubmit: EventEmitter<Product> = new EventEmitter<Product>();
    
    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.categories = [];
        this.product.categoryId = this.product.categoryId || State.empty;
        
        this.categoryService.getCategories()
        .subscribe((response: Category[]) => {
            this.categories = response;
        })
    }

    onSubmit(f: any) {
        if (f.valid) {
            this.handleSubmit.emit(this.product);
        }
    }
}