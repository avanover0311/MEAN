import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductseditComponent } from './productsedit/productsedit.component';
import { ProductsnewComponent } from './productsnew/productsnew.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'products', component: ProductsComponent, children: [
    { path: 'edit/:id', component: ProductseditComponent}
  ]},
  { path: 'products/new', component: ProductsnewComponent},
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
