import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movie: Object;
  movies: Object[];
  newMovies: any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
  	console.log('in the comp.ts')
  	this.movies = [];
  	this.movie = {'title': ' '};
  	this.showMovies();
  }

  showMovies(){
  	console.log('in the show products')
  	let moviesObservable = this._httpService.getMovie();
  	moviesObservable.subscribe((data: any) => {
  		this.movies = data['movies'];
  	});
  }

  onSubmit(){
    console.log('at onSubmit', this.newMovies);
    let newMoviesObservable = this._httpService.createMovie(this.newMovies);
    newMoviesObservable.subscribe((data: any) => {
      this.newMovies = data['movie'];
    });
  }

  movieToShow(movie) {
    console.log('at the task to show component.ts', movie);
    let showObservable = this._httpService.getNestedMovie(movie);
    showObservable.subscribe((data:any) => {
    });
  }

  deleteMovie(id: any) {
    console.log('at deletemovie in component.ts', id);
    let deleteObservable = this._httpService.destroyMovie(id);
    deleteObservable.subscribe((data: any) => {
      this.showMovies();
    });
  }


}
