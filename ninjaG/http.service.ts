import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HttpService {
    constructor(private _http: HttpClient) {
        // this.farmG();
        // this.caveG();
        // this.houseG();
        // this.casinoG();
    }

    farmG() {
        let tempObservable = this._http.get('/farmUp');
        tempObservable.subscribe(
            data => console.log("Got our tasks!", data));
        return tempObservable;
    }


}
