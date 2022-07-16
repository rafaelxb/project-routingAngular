import { Component, OnInit } from '@angular/core';
import { product} from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<product> = [
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

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
