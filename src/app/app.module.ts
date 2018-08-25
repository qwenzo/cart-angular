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
import {CookieService} from 'ngx-cookie-service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    CartListComponent,
    HeaderComponent,
    CartFormComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HeaderService,FormService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
