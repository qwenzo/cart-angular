import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderService} from './services/header.service'
import {FormService} from './services/form.service';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    CartListComponent,
    HeaderComponent,
    CartFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeaderService,FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
