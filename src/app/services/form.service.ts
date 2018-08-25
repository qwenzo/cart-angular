import { Injectable , EventEmitter , Output } from '@angular/core';
import {CartForm} from '../interfaces/cartform';
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  @Output() click: EventEmitter<boolean> = new EventEmitter();
  isOpen:boolean;
  form:CartForm;

  constructor(private cookieService:CookieService) {
    this.isOpen = false;
   }

   viewPopup(){
    this.isOpen=!this.isOpen;
     this.click.emit(this.isOpen);
   }

   getForm(){
     return this.form;

   }

   addForm(form:CartForm){
    this.form = form;
    this.cookieService.set('form',JSON.stringify(this.form));

   }
}
