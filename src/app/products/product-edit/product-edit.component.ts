import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
    product: Product;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProductById(id)
            .subscribe((product: Product) => this.product = product);
    }

    handleSubmit(product: Product): void {
        this.productService.updateProduct(product.id, product)
            .subscribe(() => this.router.navigate(['/productos']));
    }
}
