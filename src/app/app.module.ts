import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { ProductsComponent} from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { routes } from './app.routing';
import { ProductService } from './services/product.service';
import { ProductSearchComponent } from './products/product-search/product-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
