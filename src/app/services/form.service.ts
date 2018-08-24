import { Injectable , EventEmitter , Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  @Output() click: EventEmitter<boolean> = new EventEmitter();

  isOpen:boolean;

  constructor() {
    this.isOpen = false;
   }

   viewPopup(){
    this.isOpen=!this.isOpen;
     this.click.emit(this.isOpen);
   }
}
