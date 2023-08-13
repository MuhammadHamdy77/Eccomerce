import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProdComponent } from './components/list-prod/list-prod.component';
import { ViewProdComponent } from './components/view-prod/view-prod.component';
import { EditProdComponent } from './components/edit-prod/edit-prod.component';

const routes: Routes = [
  { path: '' , component:ListProdComponent},
  { path: 'view/:id' , component:ViewProdComponent},
  { path: 'edit/:id' , component:EditProdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
