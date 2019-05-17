import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { State } from '../app.enums';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
    question: string;
    isActive: boolean;
    products: Array<Product>;
    productToDelete: Product;
    allProducts: Array<Product>;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.products = [];
        this.question = State.empty;
        this.getProducts();
    }

    private getProducts(): void {
        this.productService.getProducts()
            .subscribe((products: Array<Product>) => {
                this.products = products;
                this.allProducts = products;
            });
    }

    deleteProduct(product: Product): void {
        this.question = `¿Esta seguro que desea eliminar el producto <b>'${product.name}'</b>?`;
        this.isActive = true;
        this.productToDelete = product;
    }

    onResponse(confirmation: boolean): void {
        if (confirmation) {
            const { id } = this.productToDelete;

            this.productService.deleteProduct(id)
                .subscribe(() => {
                    this.products = this.products
                        .filter(prod => prod.id !== id);
                    this.allProducts = this.products.slice();
                    this.isActive = false;
                });
        } else {
            this.isActive = false;
        }
    }

    changeState(product: Product): void {
        const prod = this.products.find(p => p.id === product.id);
        prod.actived = !prod.actived;

        this.productService.updateProduct(prod.id, prod)
            .subscribe(productUpdated => {
                this.products
                    .map(p => { p.id === productUpdated.id ? p.actived = productUpdated.actived
                        : p.actived = p.actived; });
            });
    }

    search(texto: string): void {
        this.products = texto ? this.allProducts
            .filter(p => p.name.toLowerCase().includes(texto.toLowerCase()))
                : this.allProducts;
    }
}
