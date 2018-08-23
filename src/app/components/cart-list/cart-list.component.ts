import { Component, OnInit } from '@angular/core';
import {CartItem} from '../../interfaces/cartitem';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items:CartItem[];
  constructor() { }

  ngOnInit() {
    this.items=[
      {id:0,name:'WATERMELON',price:1,img:'../../../assets/23fruit-superJumbo.jpg',Qty:0},
      {id:1,name:'BANANA',price:2,img:'../../../assets/How-Many-Calories-Are-in-a-Banana-1440x810.jpg',Qty:0},
      {id:2,name:'ORANGE',price:3,img:'../../../assets/494037460-612x612.jpg',Qty:0},
      {id:3,name:'APPLE',price:4,img:'../../../assets/apple-fruit.jpg',Qty:0},
      {id:4,name:'PEACH',price:5,img:'../../../assets/Harvester-Peach-Tree-3-450w.jpg',Qty:0}
    ]

  }

}
