import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { slideIn } from './../../animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [slideIn]
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  private authStatusSub: Subscription; // login or not
  userIsAuthenticated = false;

  private productsSub: Subscription;
  isLoading = false;
  @Input() category: string; // uzima kategoriju proizvoda
  @Input() title: string;

  // Pagination
  totalProducts = 0;
  productsPerPage = 12;
  currentpage = 1;
  pageSizeOptions = [2, 4, 8, 12];

  constructor(public productsService: ProductsService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.productsService.getProducts(this.category, this.productsPerPage, this.currentpage);
    this.productsSub = this.productsService.getProductUpdateListener()
      .subscribe((productData: {products: Product[], productCount: number}) => {
        this.isLoading = false;
        this.products = productData.products;
        this.totalProducts = productData.productCount;
      });

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentpage = pageData.pageIndex +  1;
    this.productsPerPage = pageData.pageSize;
    this.productsService.getProducts(this.category, this.productsPerPage, this.currentpage);
  }

  onDelete(productId: string) {
    this.productsService.deleteProduct(productId, this.category)
    .subscribe(() => {
      this.productsService.getProducts(this.category, this.productsPerPage, this.currentpage);
    });
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
