import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products: Object[];

  constructor(private _ProductsService: ProductsService) {

   }

  ngOnInit() {
    this.products = [];

    this._ProductsService.products().subscribe(
      (products_data: Object[]) => {
        this.products = products_data['products'];
      });
  }

}
