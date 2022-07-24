import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { product} from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<product> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  detalhesProduto(idProduto: number){
    this.router.navigateByUrl(`product-details/${idProduto}`);
  }

}
