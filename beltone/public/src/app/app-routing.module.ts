import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
	{ path: 'home',component: HomeComponent},
	{ path: 'create',component: CreateComponent},
	{ path: 'review',component: ReviewComponent},

	{ path: ' ', pathMatch: 'full', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
