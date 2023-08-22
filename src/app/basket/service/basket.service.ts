import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Basket, BasketItem } from 'src/app/core/models/basket';
import { Products } from 'src/app/core/models/products';
import { GenericService } from 'src/app/core/services/generic.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService{

  private basketSource = new BehaviorSubject<Basket|null>(null);
  basketSource$ = this.basketSource.asObservable();
  constructor(
    private generic:GenericService,
    private _http:HttpClient
  ) { }

    getBasket(id:number){
      return this._http.get<Basket>(`Basket?id=${id}`).subscribe({
        next:(basket) => {
          this.basketSource.next(basket);
        }
      })
    }


    setBasket(basket:Basket){
      this._http.post<Basket>('Basket',basket).subscribe({
        next:(basket) => {
          this.basketSource.next(basket);
        }
      })
    }

    getCurrentBasketValue(){
      return this.basketSource.value;
    }

    AddItemToBasket(item:Products , quantity=1){
      const itemToAdd:any = this.mapProductItemToBasketItem(item);
      const basket = this.getCurrentBasketValue() ?? this.createBasket();
      basket.items = this.addOrUpdateItem(basket.items , itemToAdd ,quantity);
      this.setBasket(basket);
    }
  addOrUpdateItem(items:BasketItem[],itemToAdd:BasketItem, quantity: number):BasketItem[] {
   const item = items.find(x=>x.id === itemToAdd.id);
   if(item){
    item.quantity+=quantity;
   }else{
    itemToAdd.quantity = quantity;
    items.push(itemToAdd)
   }
    return items
  }
    
    createBasket(): Basket {
      const basket  = new Basket();
      sessionStorage.setItem('basket_Id', basket.id);
      return basket 
    }

    private mapProductItemToBasketItem(item:Products) {
      return {
        id:item.id,
        productName:item.name,
        price:item.price,
        quantity:0,
        pictureUrl:item.pictureUrl,
        brand:item.productBrand,
        type:item.productType,
      }
    }
}
