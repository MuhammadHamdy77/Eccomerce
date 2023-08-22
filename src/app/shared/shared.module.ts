import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './components/pager/pager.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import {CarouselModule} from 'ngx-bootstrap/carousel'

@NgModule({
  declarations: [
    NavbarComponent,
    PagerComponent,
    LoaderComponent,
    PagingHeaderComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaginationModule.forRoot(),
    BreadcrumbModule,
    CarouselModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    PaginationModule,
    PagerComponent,
    LoaderComponent,
    PagingHeaderComponent,
    BreadCrumbComponent,
    CarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
