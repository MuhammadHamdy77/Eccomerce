import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  JwtInterceptorInterceptor } from './core/interceptors/jwt-interceptor.interceptor';
import {  ErrorinterceptorInterceptor } from './core/interceptors/errorinterceptor.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { ProductsModule } from './view/products/products.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    HttpClientModule,
    HomeModule,
    CoreModule,
    ProductsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: JwtInterceptorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS , useClass: ErrorinterceptorInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
