import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , loadChildren:()=>import('./home/home.module').then(m=> m.HomeModule)},
  { path: 'products' , loadChildren:()=>import('./view/view.module').then(m=> m.ViewModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
