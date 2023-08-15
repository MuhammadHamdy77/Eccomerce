import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/core/models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GenericService } from 'src/app/core/services/generic.service';
import { ParamsProd } from 'src/app/core/models/ParamsProd';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private genericService:GenericService,
    private _http:HttpClient
  ) { }

  // Get All Products
  getAllProducts(ParamsProd:ParamsProd):Observable<Pagination> {
    let params = new HttpParams();
    if(ParamsProd.typeId) {
      params = params.append("typeId" , ParamsProd.typeId);
    }
    if(ParamsProd.brandId) {
      params = params.append("brandId" , ParamsProd.brandId);
    }
    if(ParamsProd.sort){
      params = params.append("sort", ParamsProd.sort);
    }
    if(ParamsProd.pageSize){
      params = params.append("pageSize", ParamsProd.pageSize);
    }
    if(ParamsProd.pageNumber){
      params = params.append("pageIndex", ParamsProd.pageNumber);
    }
    if(ParamsProd.search){
      params = params.append("search", ParamsProd.search);
    }
    return this.genericService.getAll(`product` , params).pipe(
      map(
        (Pagination:Pagination)=>{ 
          return Pagination;
        }
      )
    )
  }
  // get Products
  GetTypes(){
    return this.genericService.getAll(`product/types`);
  }
  // Get Brands
  GetBrands():Observable<Pagination>{
    return this.genericService.getAll(`product/brands`);
  }
  // Get Products By ID
  GetProductsByID(id:number){
    return this.genericService.getAll(`product/${id}`);
  }
}
