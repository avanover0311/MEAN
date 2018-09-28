import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsnew',
  templateUrl: './productsnew.component.html',
  styleUrls: ['./productsnew.component.css']
})
export class ProductsnewComponent implements OnInit {
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