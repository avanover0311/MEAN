import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { MovieDeleteComponent } from './movies/movie-delete/movie-delete.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, children: [
    { path: 'create', component: MovieCreateComponent },
    { path: 'delete', component: MovieDeleteComponent }
  ]},
  // { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
