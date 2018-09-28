import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cake: Object;
  cakes: Object[];
  newCakes: any;
  constructor(private _httpService: HttpService){}


  ngOnInit(){
  	this.cakes = [];
  	this.cake = {'name': ' ', 'cake': ' '};
  }

  showCakes(){
  	let cakesObservable = this._httpService.getCakes();
  	cakesObservable.subscribe((data: any) => {
  		this.cakes = data['cakes'];
  	});
  }

  onSubmit(){
    console.log('at onSubmit', this.newCakes);
    let newCakesObservable = this._httpService.createCake(this.newCakes);
    newCakesObservable.subscribe((data: any) => {
      this.newCakes = data['cake'];
    })
  }

}
