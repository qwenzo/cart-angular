import { Component, OnInit } from '@angular/core';
import {CartForm} from '../../interfaces/cartform';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  form:CartForm;
  constructor() { }

  ngOnInit() {
    this.form = {streetName:null,streetNumber:null,city:null,country:null}
  }

}
