import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { ParamsProd } from 'src/app/core/models/ParamsProd';
import { Brands } from 'src/app/core/models/brands';
import { Pagination } from 'src/app/core/models/pagination';
import { Products } from 'src/app/core/models/products';
import { Types } from 'src/app/core/models/types';
import { GenericService } from 'src/app/core/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  constructor(private genericServ:GenericService) { }

  getAllProducts(shopParams:ParamsProd){
    let params=new HttpParams();
    if(shopParams.brandId>0)params=params.append("brandId",shopParams.brandId);
    if(shopParams.typeId)params=params.append("typeId",shopParams.typeId);
    params = params.append("sort",shopParams.sort)
    params = params.append('pageIndex', shopParams.pageNumber);
    params = params.append('pageSize', shopParams.pageSize);
    if(shopParams.search) params=params.append('search',shopParams.search);

    return this.genericServ.getAll('product',params)
  }

  GetBrands(){
    return  this.genericServ.getAll('product/brands');
  }

  GetTypes(){
    return  this.genericServ.getAll('product/types');
  }

  GetProductsByID(id:number)
  {
    return  this.genericServ.getAll(`product/${id}`);
  }
}
