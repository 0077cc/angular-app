import { Component } from '@angular/core';
import { Router } from '@angular/router/';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
    newProduct: Product = new Product();

    constructor(
        private router: Router,
        private productService: ProductService) { }

    handleSubmit(product: Product): void {
        product.urlImage = 'https://via.placeholder.com/100/771796'; // por defecto

        this.productService.createProduct(product)
            .subscribe(() => this.router.navigate(['/productos']));
    }
}
