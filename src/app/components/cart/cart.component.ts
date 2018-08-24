import { Component, OnInit } from '@angular/core';
import {FormService} from '../../services/form.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isOpen:boolean;

  constructor(private formService:FormService) { }

  ngOnInit() {
    this.isOpen=false;
    this.formService.click.subscribe(
      (isOpen)=>{
        console.log(isOpen);
        this.isOpen = isOpen;
      }
    )
  }



}
