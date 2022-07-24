import { Injectable } from '@angular/core';
import { product } from 'src/app/features/home/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  produtcs: Array<product> = [
    {
      id: 1,
      description: 'produto 1',
      price: 1000

    },
    {
      id: 2,
      description: 'produto 2',
      price: 2000
    },
    {
      id: 3,
      description: 'produto 3',
      price: 3000
    }

  ];

  constructor() { }

  getProducts() {
    return this.produtcs;
  }

  getProductById(id: number) {
    return this.produtcs.find((product) => product.id === id)
  }
}
