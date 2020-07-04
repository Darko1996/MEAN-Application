import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/products.model';
import { environment } from './../../environments/environment';

const BACKEND_URL = `${environment.apiUrl}/api/products`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];
  private productsUpdated = new Subject<{
    products: Product[];
    productCount: number;
  }>();

  constructor(private http: HttpClient, ) {}

  addProduct(title: any, image: File, productCategory: string, description: string, price: string) {
    const productData = new FormData();
    productData.append('title', title);
    productData.append('description', description);
    productData.append('productCategory', productCategory);
    productData.append('price', price);
    productData.append('image', image);

    this.http.post<{ message: string; product: Product }>(`${BACKEND_URL}/${productCategory}/`, productData)
      .subscribe(responseData => {
        console.log(`Uspesno ste dodali ${productCategory}`);
      });
  }

  getProducts(category: string, productsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${productsPerPage}&page=${currentPage}`;

    this.http.get<{ message: string; products: any; maxProducts: number }>(
      `${BACKEND_URL}/${category}${queryParams}`)
      .pipe(
        map(productData => {
          return {
            products: productData.products.map(product => {
              return {
                title: product.title,
                description: product.description,
                price: product.price,
                productCategory: product.productCategory,
                id: product._id,
                imagePath: product.imagePath
              };
            }),
            maxProducts: productData.maxProducts
          };
        })
      )
      .subscribe(transformedProductData => {
        this.products = transformedProductData.products;
        this.productsUpdated.next({
          products: [...this.products],
          productCount: transformedProductData.maxProducts
        });
      });
  }

  getProductUpdateListener() {
    return this.productsUpdated.asObservable();
  }

  getProduct(id: string, category: string) {
    return this.http.get<{ _id: string; category: string }>(
      `${BACKEND_URL}/${category}/` + id
    );
  }

  deleteProduct(productId: string, category: string) {
    return this.http.delete(`${BACKEND_URL}/${category}/${productId}`);
  }
}
