import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './components/pager/pager.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { BreadcrumbModule } from 'xng-breadcrumb';


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
    BreadcrumbModule
  ],
  exports:[
    NavbarComponent,
    PaginationModule,
    PagerComponent,
    LoaderComponent,
    PagingHeaderComponent,
    BreadCrumbComponent
  ]
})
export class SharedModule { }
