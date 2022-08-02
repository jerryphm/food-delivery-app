import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './shoppingCart/cartSlice';
import { showMenuReducer } from './menu/showMenuSlice';
import { showCartReducer } from './shoppingCart/showCartSlice';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      showMenu: showMenuReducer,
      showCart: showCartReducer
   },
});
