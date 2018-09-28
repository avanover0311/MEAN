import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router
  	) {}

  ngOnInit() {
  	this._route.params.subscribe((params: Params) => {
  		console.log(params['id'])
  	});
  }
  

}
