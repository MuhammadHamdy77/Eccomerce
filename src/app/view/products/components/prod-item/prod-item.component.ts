import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/core/models/products';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.scss']
})
export class ProdItemComponent implements OnInit {
  @Input() product?: Products;
  
  constructor(){}


  ngOnInit(): void {
  
  }



  addItemToBasket() {
    // this.product&& this.basketService.addItemToBasket(this.product)
   }
}
