import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ParamsProd } from 'src/app/core/models/ParamsProd';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.scss']
})
export class ListProdComponent implements OnInit {
allProducts:any;
AllTypes:any;
AllBrands:any;
totalCount = 0
ParamsProd = new ParamsProd();
isLoading:boolean = false;
@ViewChild('search')searchTerms?:ElementRef;

sortOptions = [
  {name: 'Alphabetical', value: 'name'},
  {name: 'Price: Low to high', value: 'priceAsc'},
  {name: 'Price: High to low', value: 'priceDesc'},
];

  constructor(
    private productsService:ProductsService
  ){}

  ngOnInit(){
    this.getAllProducts()
    this.GetTypes();
    this.GetBrands();
  }
  // Get All Products
  getAllProducts(){
    this.isLoading = true;
    this.productsService.getAllProducts(this.ParamsProd).subscribe({
      next:(res) =>{
        this.allProducts = res.data
        this.ParamsProd.pageNumber = res.pageIndex,
        this.ParamsProd.pageSize = res.pageSize,
        this.totalCount = res.count;
        this.isLoading = false;
      },
      error:(err) =>{
        console.log(err);
      },
      complete:()=>{
      }
    })
  }
  // Get All Types
  GetTypes(){
    this.isLoading = true;
    this.productsService.GetTypes().subscribe({
      next:(res:any) =>{
        this.AllTypes = [{id:0 , name:"Alll"},...res]
        this.isLoading = false;
      },
      error:(err) =>{
        console.log(err);
      },
      complete:()=>{
      }
    })
  }
  // Get All Brands
  GetBrands(){
    this.isLoading = true;
    this.productsService.GetBrands().subscribe({
      next:(res:any) =>{
        this.AllBrands = [{id:0,name:'All'} , ...res];
        this.isLoading = false;
      },
      error:(err) =>{
        console.log(err)
      },
      complete:()=>{
      }
    })
  }
  // On Select Brand
  onSelectBrand(brandId:number){
    this.ParamsProd.brandId = brandId;
    this.ParamsProd.pageNumber = 1;
    this.getAllProducts()
  }
  // On Select Types
  onSelectTypes(typeId:number){
    this.ParamsProd.typeId = typeId;
    this.ParamsProd.pageNumber = 1;
    this.getAllProducts()
  }
  // On Sort Function 
  onSortSelected(event:any){
    this.ParamsProd.sort =event.target.value;
    this.getAllProducts();
  }
  // Redirect To page 
  RedirectToPage(page:number){
    if(page !== null){
      this.ParamsProd.pageNumber = page
      this.getAllProducts();
    }
  }
  // on Searc
  onSearch(){
    this.ParamsProd.search = this.searchTerms?.nativeElement.value;
    this.ParamsProd.pageNumber = 1;
    this.getAllProducts();
  }
  // On Reset
  onReset(){
    if(this.searchTerms){
      this.searchTerms.nativeElement.value = "";
      this.ParamsProd = new ParamsProd();
      this.getAllProducts();
    }
  }
}
