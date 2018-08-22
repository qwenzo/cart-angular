import { Injectable , Output , EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Output() change: EventEmitter<number> = new EventEmitter();
  numberOfItems:number;

  constructor() { 
    var numberOfItemsInLocalStorage = localStorage.getItem('numberOfItems');
    if(numberOfItemsInLocalStorage!==null){
      this.numberOfItems = +numberOfItemsInLocalStorage;
    }
    else{
      this.numberOfItems=0;
    }
  }

   addNewItem(){
     this.change.emit(this.numberOfItems+=1);
     console.log(this.numberOfItems);
  }
}
