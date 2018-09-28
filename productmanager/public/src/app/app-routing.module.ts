import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreationComponent } from './creation/creation.component';


const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'list',component: ListComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'create/:id', component: CreationComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/' },
  // the ** will catch anything that did not match any of the above routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
