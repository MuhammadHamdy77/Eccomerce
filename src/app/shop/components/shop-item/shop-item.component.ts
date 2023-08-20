import { Component, Input } from '@angular/core';
import { Products } from 'src/app/core/models/products';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  @Input() product?: Products;
  
  constructor(){}


  ngOnInit(): void {
  
  }



  addItemToBasket() {
    // this.product&& this.basketService.addItemToBasket(this.product)
   }
}
