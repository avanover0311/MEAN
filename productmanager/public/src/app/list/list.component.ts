import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
