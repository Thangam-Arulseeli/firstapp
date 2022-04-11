import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { ProductlistComponent } from './components/products/productlist/productlist.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { OrderlistComponent } from './components/order/orderlist/orderlist.component';
import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/products/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    ProductlistComponent,
    HomeComponent,
    NavbarComponent,
    OrderlistComponent,
    UserComponent,
    ProductComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
