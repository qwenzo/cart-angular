import { Component, OnInit , Input  } from '@angular/core';
import {CartItem} from '../../interfaces/cartitem';
import {HeaderService} from '../../services/header.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})


export class CartItemComponent implements OnInit {


  @Input('item') item: CartItem;



  constructor(private headerService:HeaderService) {
   }

  ngOnInit() {

  }

  addNewItem(){
    this.headerService.addNewItem();
  }

  onHoverAddButton(e){
   // e.target.innerHTML="Add To Cart";
  }

}
