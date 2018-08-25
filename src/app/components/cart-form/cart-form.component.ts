import { Component, OnInit  } from '@angular/core';
import {FormControl,Validators , FormGroup} from '@angular/forms';
import {CartForm} from '../../interfaces/cartform';
import {FormService} from '../../services/form.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  form:CartForm;
  numbs:number[];
  cartForm;
  constructor(private formService:FormService) { }

  ngOnInit() {
    
    this.numbs =[];
    this.form = {streetName:null,streetNumber:null,city:null,country:null,phoneNumbers:[]}
    /* this.cartForm = new FormGroup(
      {
        streetName:new FormControl(""),
      }
    )
 */
  }

  closeForm(e){
    if(e.target.classList.contains('formContainer')){
      this.formService.viewPopup();
    }
  }

  submit(e){
    console.log( this.form);
    this.formService.addForm(this.form);
  }

  add(){
    console.log(this.form.phoneNumbers.length);
    this.numbs.push(1);
  }

  remove(index,e){
    this.form.phoneNumbers.splice(index,1);
    this.numbs.splice(index-1,1);
  }

}
