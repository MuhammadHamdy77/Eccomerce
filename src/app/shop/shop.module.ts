import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { DetailsShopComponent } from './components/details-shop/details-shop.component';
import { SharedModule } from '../shared/shared.module';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ListShopComponent } from './components/list-shop/list-shop.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListShopComponent,
    DetailsShopComponent,
    ShopItemComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports:[ListShopComponent],
})
export class ShopModule { }
