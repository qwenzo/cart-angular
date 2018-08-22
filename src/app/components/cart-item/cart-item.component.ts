import { Component, OnInit , Input } from '@angular/core';
import {CartItem} from '../../interfaces/cartitem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})


export class CartItemComponent implements OnInit {


  @Input('item') item: CartItem;

  constructor() {
   }

  ngOnInit() {

  }

}
