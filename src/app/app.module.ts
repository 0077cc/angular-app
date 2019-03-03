import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { CategoryService } from './services/category.service';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { TitlePipe } from './pipes/title.pipe';
import { LoginComponent } from './components/login/login.component';
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductSearchComponent,
    ShortTextPipe,
    TitlePipe,
    LoginComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
