import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberOfItems:number;

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    var numberOfItemsInLocalStorage = localStorage.getItem('numberOfItems');
    if(numberOfItemsInLocalStorage!==null){
      this.numberOfItems = +numberOfItemsInLocalStorage;
    }
    
    this.headerService.change.subscribe( (numberOfitems)=>
     this.handleNewItem(numberOfitems)
    )
  }

  handleNewItem(numberOfItems){
    console.log(numberOfItems);
    localStorage.setItem('numberOfItems',numberOfItems);
    this.numberOfItems = +localStorage.getItem('numberOfItems');
  }

}
