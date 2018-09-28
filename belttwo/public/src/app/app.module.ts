import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductseditComponent } from './productsedit/productsedit.component';
import { ProductsnewComponent } from './productsnew/productsnew.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductseditComponent,
    ProductsnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
