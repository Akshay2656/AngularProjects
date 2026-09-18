import { Component, signal } from '@angular/core';
import { ProductCart } from '../product-cart/product-cart';
import { Product } from './../product-cart/product-cart';


@Component({
  imports: [ProductCart],
 
selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

  products = signal<Product>({
    id : 1,
    name : "books",
    price : 500
  })

}

