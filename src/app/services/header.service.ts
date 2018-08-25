import { Injectable , Output , EventEmitter } from '@angular/core';
import {CartItem} from '../interfaces/cartitem';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  @Output() change: EventEmitter<number> = new EventEmitter();
  @Output() changeInItems: EventEmitter<CartItem[]> = new EventEmitter();
  numberOfItems:number;
  items:CartItem[];

  constructor(private cookieService:CookieService) {
    this.checkItemsInCookies();
    this.checkNumberOfItemsInCookies();
  }

  addNewItem(item:CartItem){
    item.Qty+=1;
    this.change.emit(this.numberOfItems+=1);
    this.changeInItems.emit(this.items);
  }

  removeItem(item:CartItem){
    if(item.Qty!==0){
      item.Qty-=1;
      this.change.emit(this.numberOfItems-=1);
      this.changeInItems.emit(this.items);
    }
  }

  getItems(){
    return this.items;
  }

  checkItemsInCookies(){
    if(this.cookieService.check('items')){
      this.items = JSON.parse(this.cookieService.get('items')) ;
      
    }
    else{
      this.items = [
        {id:0,name:'WATERMELON',price:1,img:'../../../assets/23fruit-superJumbo.jpg',Qty:0},
        {id:1,name:'BANANA',price:2,img:'../../../assets/How-Many-Calories-Are-in-a-Banana-1440x810.jpg',Qty:0},
        {id:2,name:'ORANGE',price:3,img:'../../../assets/494037460-612x612.jpg',Qty:0},
        {id:3,name:'APPLE',price:4,img:'../../../assets/apple-fruit.jpg',Qty:0},
        {id:4,name:'PEACH',price:5,img:'../../../assets/Harvester-Peach-Tree-3-450w.jpg',Qty:0}
      ];
       this.cookieService.set('items',JSON.stringify(this.items));
    }
  }

  checkNumberOfItemsInCookies(){
    var numberOfItemsInLocalStorage = this.cookieService.get('numberOfItems');
    if(numberOfItemsInLocalStorage!==null){
      this.numberOfItems = +numberOfItemsInLocalStorage;
    }
    else{
      this.numberOfItems=0;
    }
  }


}
