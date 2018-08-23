import { Injectable , Output , EventEmitter } from '@angular/core';
import {CartItem} from '../interfaces/cartitem';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  @Output() change: EventEmitter<number> = new EventEmitter();
  numberOfItems:number;
  items:CartItem[];

  constructor() { 
    this.items = [];
    var numberOfItemsInLocalStorage = localStorage.getItem('numberOfItems');
    if(numberOfItemsInLocalStorage!==null){
      this.numberOfItems = +numberOfItemsInLocalStorage;
    }
    else{
      this.numberOfItems=0;
    }
  }

   incrementNumberOfItems(){
     this.change.emit(this.numberOfItems+=1);
     console.log(this.numberOfItems);
  }

  addNewItem(item:CartItem){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].name==item.name){
        this.items[i].Qty+=1;
        return;
      }

    }
   this.items.push(item);
  }

  removeItem(item:CartItem){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].name==item.name){
        if(this.items[i].Qty >= 1)
        this.items[i].Qty-=1;
        else if(this.items[i].Qty==0){
          this.items.splice(i, 1);
        }
      }

    }
  }


}
