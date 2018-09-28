import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    tasks: Object[];
    total: Number;

    constructor(private _httpService: HttpService){}

    ngOnInit() {
        this.tasks = [];
        this.total = 0;
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    farmUp() {
        console.log('Farm Up');
        let G = this.getRndInteger(2,5);
        this.total += G;
        this.tasks.push(`You earned ${G} gold at the farm`)
        // let tasksObservable = this._httpService.farmG();
        // tasksObservable.subscribe((data: any) => {
            // this.total += data.value;
        // });
        return this;
    }

    caveUp() {
        console.log('Cave Up');
        let G = this.getRndInteger(5,10);
        this.total += G;
        this.tasks.push(`You earned ${G} gold at the Cave`)
        // let tasksObservable = this._httpService.caveG();
        // tasksObservable.subscribe((data: any) => {
            // this.tasks = data;
        // });
        return this;
    }

    houseUp() {
        console.log('House Up');
        let G = this.getRndInteger(7,15);
        this.total += G;
        this.tasks.push(`You earned ${G} gold at the House`)
        // let tasksObservable = this._httpService.houseG();
        // tasksObservable.subscribe((data: any) => {
            // this.tasks = data;
        // });
        return this;
    }

    casinoUp() {
        console.log('Casino Hit');
        let G = this.getRndInteger(-100,100);
        this.total += G;
        this.tasks.push(`You came out with ${G} gold from the Yasino`)
        // let tasksObservable = this._httpService.casinoG();
        // tasksObservable.subscribe((data: any) => {
            // this.tasks = data;
        // });
        return this;
    }

    reset() {
        console.log('Reset!');
        this.total = 0;
        this.tasks.push(`You just reset back to 0 Gold.`)

        // let tasksObservable = this._httpService.casinoG();
        // tasksObservable.subscribe((data: any) => {
            // this.tasks = data;
        // });
        return this;
    }
}
