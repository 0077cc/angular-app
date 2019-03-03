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
    products: Product[];
    productToDelete: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = [];
        this.isActive = false;
        this.question = State.empty
        this.getProducts();        
    }

    private getProducts() {
        this.productService.getProducts()
            .subscribe((products: Product[]) => {
                this.products = products;
            });
    }

    deleteProduct(product: Product) {
        this.question = `
            ¿Esta seguro que desea eliminar el producto <b>"${product.name}"</b>?
        `;
        this.isActive = true;
        this.productToDelete = product;
    }

    onResponse(confirmation: boolean) {
        if (confirmation) {
            const { id } = this.productToDelete;

            this.productService.deleteProduct(id)
                .subscribe(response => {
                    this.products = this.products
                        .filter(prod => prod.id !== id);
                    this.isActive = false;
                });
        } else {
            this.isActive = false;
        }

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