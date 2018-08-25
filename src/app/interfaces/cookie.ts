import {CartItem} from './cartitem';
import {CartForm} from './cartform';
export interface Cookie{
    form:CartForm,
    items:CartItem[],
    numberOfItems:number

  }