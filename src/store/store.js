import { activePageReducer } from './activePage/activePage';
import { cartReducer } from './shoppingCart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { showCartReducer } from './shoppingCart/showCartSlice';
import { showMenuReducer } from './menu/showMenuSlice';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      showMenu: showMenuReducer,
      showCart: showCartReducer,
      activePage: activePageReducer,
   },
});
