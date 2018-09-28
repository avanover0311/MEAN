import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  };

  getMovie(){
  	console.log('in the service.ts')
  	return this._http.get('/movies')
  };

  getNestedMovie(movie){
    return this._http.get('/movies/${movie._id}')
  }

  createMovie(newMovies) {
    return this._http.post('/movies', newMovies)
  };

  destroyMovie(id) {
    console.log('at destroyTask in service.ts', id);
    return this._http.delete('/movies/'+id)
  };

}
