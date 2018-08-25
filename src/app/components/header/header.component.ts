import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {FormService} from '../../services/form.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numberOfItems:number;

  constructor(private headerService:HeaderService,private cookieService:CookieService, private formService:FormService) { }

  ngOnInit() {
    var numberOfItemsInLocalStorage = this.cookieService.get('numberOfItems');
    if(numberOfItemsInLocalStorage!==null){
      this.numberOfItems = +numberOfItemsInLocalStorage;
    }
    
    this.headerService.change.subscribe( (numberOfitems)=>
     this.handleNewItem(numberOfitems)
    )
  }

  handleNewItem(numberOfItems){
    this.cookieService.set('numberOfItems',numberOfItems);
    this.numberOfItems = +this.cookieService.get('numberOfItems');
  }

  checkForm(){
    if(this.formService.getForm()===undefined){
      return false;
    }
    return true;
  }

}
