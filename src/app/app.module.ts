import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderService} from './services/header.service'
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';

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
    BrowserModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
