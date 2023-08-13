import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './components/pager/pager.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';


@NgModule({
  declarations: [
    NavbarComponent,
    PagerComponent,
    LoaderComponent,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaginationModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    PaginationModule,
    PagerComponent,
    LoaderComponent,
    PagingHeaderComponent
  ]
})
export class SharedModule { }
