import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  };

  getCakes(){
  	console.log("In the service.ts")
  		return this._http.get('/cakes')
  };

  createCake(newCakes) {
  	return this._http.post('/cakes', newCakes)
  };

  
}
