import { Component, OnInit } from '@angular/core';
import {CartForm} from '../../interfaces/cartform';
import {FormService} from '../../services/form.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  form:CartForm;

  constructor(private formService:FormService,private cookieService:CookieService) {
    this.form = this.formService.getForm();
  }

  ngOnInit() {
 
    }
    

}
