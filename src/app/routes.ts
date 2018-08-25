import { CartComponent } from './components/cart/cart.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export  const routes = [
    {path:'',component:CartComponent},
    {path:'user/info',component:UserDetailsComponent},
  ]