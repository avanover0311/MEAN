import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  };

  getProduct(){
  	console.log('in the service.ts')
  	return this._http.get('/products')
  };

  getNestedProduct(product){
    return this._http.get('/products/${product._id}')
  }

  createProduct(newProducts) {
    return this._http.post('/products', newProducts)
  };

  destroyProduct(id) {
    console.log('at destroy Task in service.ts', id);
    return this._http.delete('/products/'+id)
  };

}
