import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = [];
        this.getProducts();        
    }

    private getProducts() {
        this.productService.getProducts()
            .subscribe((products: Product[]) => {
                this.products = products;
            });
    }

    deleteProduct(product: Product) {
        const { id } = product;

        this.productService.deleteProduct(id)
            .subscribe(response => {
                this.products = this.products
                    .filter(prod => prod.id !== id);
                // this.getProducts();
            });
    }

    changeState(product: Product) {
        this.products.map(prod => {
            if (prod.id === product.id) {
                prod.actived = !prod.actived;
            }
        })
    }

    search(texto:string){
        this.productService.getProducts().subscribe(
            (response:Product[]) => {
                this.products=response.filter(prod => prod.name.toUpperCase().includes(texto.toUpperCase()) );
            }
        );
    }
}