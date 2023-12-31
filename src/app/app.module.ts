import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  JwtInterceptorInterceptor } from './core/interceptors/jwt-interceptor.interceptor';
import {  ErrorinterceptorInterceptor } from './core/interceptors/errorinterceptor.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

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
    CoreModule,
    HomeModule,
    NgxSpinnerModule.forRoot()
  ],
  exports:[
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: JwtInterceptorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS , useClass: ErrorinterceptorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS , useClass: LoadingInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
