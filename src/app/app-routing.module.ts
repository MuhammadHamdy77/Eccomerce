import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestErrorComponent } from './core/components/test-error/test-error.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ServerErrorComponent } from './core/components/server-error/server-error.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent,data:{breadcrumb:'Home'}},
  {path:'test-error',component:TestErrorComponent,pathMatch:'full'},
  {path:'not-found',component:NotFoundComponent,pathMatch:'full'},
  {path:'server-error',component:ServerErrorComponent,pathMatch:'full'},
  {path: 'products' , loadChildren:()=>import('./view/view.module').then(m=> m.ViewModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
