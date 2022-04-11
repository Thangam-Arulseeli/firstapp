import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { CustomerlistComponent } from './components/customerlist/customerlist.component'; 
 import { ProductlistComponent } from './components/products/productlist/productlist.component';
 import { HomeComponent } from './components/home/home.component';
 import { NavbarComponent } from './components/common/navbar/navbar.component';
 import { OrderlistComponent } from './components/order/orderlist/orderlist.component';
 import { UserComponent } from './components/users/user/user.component';
 import { ProductComponent } from './components/products/product/product.component';  

const routes: Routes = [

  {path : '', component:HomeComponent},
  { path :'customers', component:CustomerlistComponent} ,
   { path : 'productlists', component:ProductlistComponent}, 
   {path: 'navbar' , component:NavbarComponent},
   {path: 'orders', component:OrderlistComponent},
   {path: 'users', component:UserComponent},
   {path: 'products', component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
