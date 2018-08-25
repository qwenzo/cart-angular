import { Component, OnInit } from '@angular/core';
import {CartItem} from '../../interfaces/cartitem';
import {FormService} from '../../services/form.service';
import {HeaderService} from '../../services/header.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items:CartItem[];
  constructor(private formService:FormService,private cookieService:CookieService,private headerService:HeaderService) { 
    this.headerService.changeInItems.subscribe(
      (items:CartItem[])=>{
        this.handleChangeInItems(items);
      }
    )

  }

  ngOnInit() {
  this.items=this.headerService.getItems();
  }

  onProceedClick(){
    this.formService.viewPopup();
    
  }

  handleChangeInItems(items:CartItem[]){
    this.items=items;
    this.cookieService.set('items',JSON.stringify(this.items));
  }

  checkQuantity(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].Qty>0){
        return true;
      }
    }
    return false;
  }

}
