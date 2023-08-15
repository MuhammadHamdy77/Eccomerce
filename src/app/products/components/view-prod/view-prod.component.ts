import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from 'src/app/core/models/products';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-prod',
  templateUrl: './view-prod.component.html',
  styleUrls: ['./view-prod.component.scss']
})
export class ViewProdComponent implements OnInit{
  id!:any;
  product!:Products;
  constructor(
    private ProductsService:ProductsService,
    private activatedRoute:ActivatedRoute,
    private tos:ToastrService
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
    this.ProductsService.GetProductsByID(id).subscribe({

     next:(res:any)=>{
      this.product = res
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
