import { Component, OnInit } from '@angular/core';
import {CartForm} from '../../interfaces/cartform';
import {FormService} from '../../services/form.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  form:CartForm;
  constructor(private formService:FormService) { }

  ngOnInit() {
    this.form = {streetName:null,streetNumber:null,city:null,country:null}
  }

  closeForm(e){
    if(e.target.classList.contains('formContainer')){
      this.formService.viewPopup();
    }
  }

  submit(e){
    console.log(this.form);
  }

}
