import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/core/models/products';
import { ShopService } from '../../services/shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-details-shop',
  templateUrl: './details-shop.component.html',
  styleUrls: ['./details-shop.component.scss']
})
export class DetailsShopComponent {
  id!:any;
  product!:Products;
  constructor(
    private activatedRoute:ActivatedRoute,
    private tos:ToastrService,
    private ShopService:ShopService,
    private breadServ:BreadcrumbService
    ){}

  ngOnInit(): void {
    this.getID();
  }

  // Get ID In Params
  getID(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.GetProductsByID(this.id);
    }
  }
  // Get Products By ID
  GetProductsByID(id:any){
    this.ShopService.GetProductsByID(id).subscribe({

     next:(res:any)=>{
      this.product = res;
      this.breadServ.set('@productDetails',this.product.name)
      },
      complete:()=>{
      },
      error:(err)=>{
        this.tos.success(err)
      }
    }
    )
  }

}
