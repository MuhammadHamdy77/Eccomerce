import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewRoutingModule,
    RouterModule
  ] ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ViewModule { }
