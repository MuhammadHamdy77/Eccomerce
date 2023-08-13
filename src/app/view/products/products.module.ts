import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProdComponent } from './components/list-prod/list-prod.component';
import { RouterModule } from '@angular/router';
import { ProdItemComponent } from './components/prod-item/prod-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListProdComponent,
    ProdItemComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    ProdItemComponent
  ]

})
export class ProductsModule { }
