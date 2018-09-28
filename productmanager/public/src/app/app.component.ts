import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  product: Object;
  products: Object[];

  constructor(private _httpService: HttpService){}

  ngOnInit(){
  	console.log('in the comp.ts')
  	this.products = [];
  	this.product = {'title': ' ', 'description': ' ', 'price': ' '};
  }

  showProducts(){
  	console.log('in the showproducts')
  	let productsObservable = this._httpService.getProduct();
  	productsObservable.subscribe((data: any) => {
  		this.products = data['products'];
  	});
  }
  
}
