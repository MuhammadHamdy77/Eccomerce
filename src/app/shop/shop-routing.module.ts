import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShopComponent } from './components/list-shop/list-shop.component';
import { DetailsShopComponent } from './components/details-shop/details-shop.component';

const routes: Routes = [
  {path:'', component:ListShopComponent , data: {breadcrumb: 'shop'}},
  {path:'shop/:id',component:DetailsShopComponent, data: {breadcrumb: {alias: 'productDetails'}}},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
