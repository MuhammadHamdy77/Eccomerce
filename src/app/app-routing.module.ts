import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestErrorComponent } from './core/components/test-error/test-error.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ServerErrorComponent } from './core/components/server-error/server-error.component';
import { HomeComponent } from './home/components/home/home.component';
import { ListShopComponent } from './shop/components/list-shop/list-shop.component';

const routes: Routes = [
  {path:'', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) , data:{breadcrumb:'Home'}},
  {path:'test-error',component:TestErrorComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'server-error',component:ServerErrorComponent},
  {path:'shop',loadChildren: ():any  => import('./shop/shop.module').then(m => m.ShopModule)},
  {path:'basket',loadChildren: ():any  => import('./basket/basket.module').then(m => m.BasketModule)},
  // {path:'shop',component:ListShopComponent},
];

@NgModule({
  imports: [RouterModule.
    forRoot(routes,{useHash: false , scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
